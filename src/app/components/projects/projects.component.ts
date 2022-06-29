import { Project } from './../../models/project.model';
import { AddProjectComponent } from '../add-project/add-project.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionDialogComponent } from '../action-dialog/action-dialog.component';
import { AuthService } from '../../services/auth/auth.service';
import { Store } from '@ngrx/store';
import { EmployeesState } from 'src/app/states/employees.state';
import * as ProjectsActions from '../../actions/projects.actions';
import { EditProjectComponent } from '../edit-project/edit-project.component';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectsTableColumns: string[] = ['name', 'action'];
  projects: Project[];
  filteredProjects: Project[];

  constructor(private authService: AuthService, public dialog: MatDialog, private store: Store<EmployeesState>) {}

  private fetchProjects() {
    this.store.dispatch(new ProjectsActions.GetProjects());

    this.store.select('projects').subscribe((response: any) => {
      if (response?.projects) {
        // filter projects so it doesn't show 'Unassigned' in the list
        this.projects = response.projects.filter((project) => project.name !== 'Unassigned');
        this.filteredProjects = this.projects;
      }
    });
  }

  deleteProject(project: Project): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: project.name,
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe((status) => {
      if (status === 'yes') {
        this.store.dispatch(new ProjectsActions.DeleteProject(project));
      }
    });
  }

  openEditProjectDialog(project: Project): void {
    const editProjectDialogConfig = new MatDialogConfig();

    editProjectDialogConfig.disableClose = true;

    editProjectDialogConfig.width = '750px';

    editProjectDialogConfig.data = { project: project, parent: this };

    const dialogRef = this.dialog.open(EditProjectComponent, editProjectDialogConfig);

    dialogRef.afterClosed().subscribe((updatedProject) => {
      if (!updatedProject) {
        // if nothing was edited
        dialogRef.close();
        return;
      }
      if (updatedProject !== undefined && updatedProject.name !== '') {
        this.store.dispatch(new ProjectsActions.UpdateProject(updatedProject));
      }
    });
  }

  openAddProjectDialog(): void {
    const addProjectDialogConfig = new MatDialogConfig();

    addProjectDialogConfig.disableClose = true;

    addProjectDialogConfig.width = '600px';

    addProjectDialogConfig.data = {};

    const dialogRef = this.dialog.open(AddProjectComponent, addProjectDialogConfig);

    dialogRef.afterClosed().subscribe((project) => {
      if (project !== undefined && project.name !== '') {
        this.store.dispatch(new ProjectsActions.AddProject(project));
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }

  filterByName(input: String): void {
    const name = input.split(' ').join('').toLowerCase().trim();
    this.filteredProjects = this.projects.filter((element) => element.name.toLowerCase().includes(name));
  }

  ngOnInit(): void {
    this.fetchProjects();
  }
}
