import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from './../../models/project.model';
import { Employee } from 'src/app/models/employee.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeesViewDialogComponent } from '../team-allocation-all-employees-view-dialog/employees-view-dialog.component';
import { RoutePaths } from 'src/app/route-paths.enum';
import { ActivatedRoute } from '@angular/router';
import { EmployeesState } from 'src/app/states/employees.state';
import { Store } from '@ngrx/store';
import * as ProjectsActions from '../../actions/projects.actions';
import { EditTeamAllocationComponent } from '../edit-team-allocation/edit-team-allocation.component';
@Component({
  selector: 'app-team-allocation',
  templateUrl: './team-allocation.component.html',
  styleUrls: ['./team-allocation.component.css'],
})
export class TeamAllocationComponent implements OnInit {
  projectId: number = +this.route.snapshot.paramMap.get('id');
  projects: Project[];

  teamAllocationTableColumns: string[] = ['name', 'employees', 'fte', 'manager', 'action'];
  public projectDataSource: MatTableDataSource<Project>;
  @ViewChild(MatSort) sort: MatSort;
  employees: Map<number, Employee[]> = new Map<number, Employee[]>();
  managers: Map<number, Employee> = new Map<number, Employee>();

  router: any;

  constructor(private route: ActivatedRoute, private dialog: MatDialog, private store: Store<EmployeesState>) {}

  private fetchProjects() {
    this.store.dispatch(new ProjectsActions.GetProjects());

    this.store.select('projects').subscribe((response: any) => {
      if (response?.projects) {
        // filter projects so it doesn't show 'Unassigned' in the list
        this.projects = response.projects.filter((project) => project.name !== 'Unassigned');
        this.projects.forEach((project) => this.employees.set(project.id, project.employees));
        this.projects.forEach((project) => this.managers.set(project.id, project.manager));
        this.projectDataSource = new MatTableDataSource(this.projects);
        this.projectDataSource.sort = this.sort;
      }
    });
  }

  openEditTeamAllocationDialog(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '850px';
    //  dialogConfig.minHeight = 'fit-content';
    dialogConfig.data = {
      project: project,
      parent: this,
    };
    const dialogRef = this.dialog.open(EditTeamAllocationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((project) => {
      if (!project) {
        // if nothing was edited
        dialogRef.close();
        return;
      }
      if (project !== undefined && project.name !== '') {
        this.store.dispatch(new ProjectsActions.UpdateProject(project));
      }
    });
  }

  openEmployeesViewDialog(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '650px';
    dialogConfig.minHeight = 'fit-content';
    dialogConfig.data = {
      project,
    };
    const dialogRef = this.dialog.open(EmployeesViewDialogComponent, dialogConfig);
  }
  myTabSelectedIndexChange(index: number) {
    if (index === 1) {
      this.router.navigate([`${RoutePaths.TeamAllocation}`]);
    }
  }
  ngOnInit(): void {
    this.fetchProjects();
  }
}
