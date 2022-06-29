import { Skill } from './../../models/skill.model';
import { Project } from './../../models/project.model';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NotificationService } from './../../services/notification/notification.service';
import { Employee } from './../../models/employee.model';
import { RoutePaths } from '../../route-paths.enum';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SetPastEmployeeComponent } from '../set-past-employee/set-past-employee.component';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SkillDescriptionComponent } from '../skill-description/skill-description.component';
import { EmployeesState } from 'src/app/states/employees.state';
import { Store } from '@ngrx/store';
import * as EmployeesActions from '../../actions/employees.actions';
import * as ProjectsActions from '../../actions/projects.actions';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
interface FilterGroup {
  generalRanks: string[];
  roles: string[];
  skills: string[];
  skillGroups: string[];
  domains: string[];
  projects: Project[];
  level: number;
  name: string;
}

class SortOption {
  name: String;
  sortType: 'Ascending' | 'Descending';
}
@Component({
  selector: 'app-employees-skills',
  templateUrl: './employees-skills.component.html',
  styleUrls: ['./employees-skills.component.css'],
})
export class EmployeesSkillsComponent implements OnInit {
  routePaths = RoutePaths;
  employees: Employee[];
  projects: Project[];
  project: string[] = [];
  filteredEmployees: Employee[];
  temp: Employee[];
  filteredSkills: Skill[];
  skills: string[] = [];
  sortOptions = Array<SortOption>(
    { name: 'Name(A-Z)', sortType: 'Ascending' },
    { name: 'Name(Z-A)', sortType: 'Descending' },
    { name: 'General Rank - Ascending', sortType: 'Ascending' },
    { name: 'General Rank - Descending', sortType: 'Descending' }
  );
  sortOption = this.sortOptions[0];
  searchFilter: string;
  isUnassignedChecked = false;
  techSkillInputCountModifier = 0;

  generalRanks: any = [];
  skillGroups: any = [];
  roles: string[] = [];
  domains: any = [];
  skillNames: any = [];
  emp: any;
  mainGeneralRanks: Array<string[]> = [];
  mainEmployeeRoles: Array<string[]> = [];
  mainDomains: Array<string[]> = [];
  mainSkills: Array<string[]> = [];
  mainSkillGroups: Array<string[]> = [];
  mainProjects: Array<string[]> = [];

  tickedCheckboxes: number = 0; // counter for ticked checkboxes
  isSkillLevelChecked: boolean = false; // by default skill level isn't checked

  // Filter group
  private filterGroup: FilterGroup = {
    generalRanks: [],
    roles: [],
    skills: [],
    skillGroups: [],
    domains: [],
    projects: [],
    level: null,
    name: '',
  };
  allGeneralRanks: any[];
  allRoles: any[];
  allSkillGroups: any[];
  allDomains: any[];
  allSkills: any[];
  allProjects: any[] = [];

  private counter = {
    generalRanks: [],
    roles: [],
    skills: [],
    skillGroups: [],
    domains: [],
    projects: [],
  };
  dialogText: string;
  constructor(
    private notificationService: NotificationService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private dialog: MatDialog,
    private skilldialog: MatDialog,
    private store: Store<EmployeesState>
  ) {
    this.matIconRegistry.addSvgIcon(
      'avatar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/account_circle-24px.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'skill-level-star',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/grade-24px.svg')
    );
  }

  private fetchEmployees() {
    this.store.dispatch(new EmployeesActions.GetEmployees());
    this.store.select('employees').subscribe((response: any) => {
      if (response?.employees) {
        this.employees = response.employees;
        this.filteredEmployees = response.employees;
        this.temp = this.filteredEmployees.slice(0, this.filteredEmployees.length);

        // Set filtering values
        this.generalRanks = Array.from(new Set(this.employees.map((employee) => employee.generalRank)));
        this.roles = Array.from(new Set(this.employees.map((employee) => employee.title)));
        this.skillGroups = Array.from(new Set(this.employees.map((employee) => employee.skillGroup)));
        this.domains = Array.from(new Set(this.employees.map((employee) => employee.domain)));

        this.employees.forEach((e) => e.skills.forEach((s) => this.skills.push(s.skillname)));
        this.skills = Array.from(new Set(this.skills));

        this.allGeneralRanks = [...response.employees.map((e) => e.generalRank)];
        this.allGeneralRanks.sort(this.sortGeneralRankCheckboxes); // sort general ranks in ascending order for checkboxes
        this.allRoles = [...response.employees.map((e) => e.title)];
        this.allSkillGroups = [...response.employees.map((e) => e.skillGroup)];
        this.allDomains = [...response.employees.map((e) => e.domain)];
        this.allSkills = [].concat.apply([], [...response.employees.map((e) => e.skills.map((s) => s.skillname))]);
        this.allProjects = [].concat.apply(
          [],
          [...response.employees.map((e) => (e.projects.length === 0 ? undefined : e.projects.map((p) => p.name)))]
        );

        for (let i = 0; i < this.allGeneralRanks.length; i++) {
          const generalRank = this.allGeneralRanks[i];
          let isInCounter = this.counter.generalRanks.find((r) => r.name === generalRank);
          if (!isInCounter) {
            this.counter.generalRanks.push({
              name: generalRank,
              count: 1,
            });
          } else {
            const rankIndex = this.counter.generalRanks.indexOf(isInCounter);
            this.counter.generalRanks[rankIndex].count += 1;
          }
        }
        for (let i = 0; i < this.allRoles.length; i++) {
          const role = this.allRoles[i];
          let isInCounter = this.counter.roles.find((r) => r.name === role);
          if (!isInCounter) {
            this.counter.roles.push({
              name: role,
              count: 1,
            });
          } else {
            const rankIndex = this.counter.roles.indexOf(isInCounter);
            this.counter.roles[rankIndex].count += 1;
          }
        }
        for (let i = 0; i < this.allSkillGroups.length; i++) {
          const skillGroup = this.allSkillGroups[i];
          let isInCounter = this.counter.skillGroups.find((s) => s.name === skillGroup);
          if (!isInCounter) {
            this.counter.skillGroups.push({
              name: skillGroup,
              count: 1,
            });
          } else {
            const rankIndex = this.counter.skillGroups.indexOf(isInCounter);
            this.counter.skillGroups[rankIndex].count += 1;
          }
        }
        for (let i = 0; i < this.allDomains.length; i++) {
          const domain = this.allDomains[i];
          let isInCounter = this.counter.domains.find((d) => d.name === domain);
          if (!isInCounter) {
            this.counter.domains.push({
              name: domain,
              count: 1,
            });
          } else {
            const rankIndex = this.counter.domains.indexOf(isInCounter);
            this.counter.domains[rankIndex].count += 1;
          }
        }
        for (let i = 0; i < this.allSkills.length; i++) {
          const skill = this.allSkills[i];
          let isInCounter = this.counter.skills.find((s) => s.name === skill);
          if (!isInCounter) {
            this.counter.skills.push({
              name: skill,
              count: 1,
            });
          } else {
            const rankIndex = this.counter.skills.indexOf(isInCounter);
            this.counter.skills[rankIndex].count += 1;
          }
        }

        for (let i = 0; i < this.allProjects.length; i++) {
          const project = this.allProjects[i];
          let isInCounter = this.counter.projects.find((p) => p.name === project);
          if (!isInCounter) {
            this.counter.projects.push({
              name: project,
              count: 1,
            });
          } else {
            const rankIndex = this.counter.projects.indexOf(isInCounter);
            this.counter.projects[rankIndex].count += 1;
          }
        }

        this.mainGeneralRanks = this.groupArrayIntoPairs(this.generalRanks.sort(this.sortGeneralRanks));
        this.mainSkillGroups = this.groupArrayIntoPairs(this.skillGroups);
        this.mainDomains = this.groupArrayIntoPairs(this.domains);
        this.mainEmployeeRoles = this.groupArrayIntoPairs(this.roles);
        this.mainSkills = this.groupArrayIntoPairs(this.skills);
      }
    });
  }

  openSkillDescriptionDialog(skill: Skill, employee: Employee) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '650px';
    dialogConfig.minHeight = 'fit-content';
    dialogConfig.data = {
      skill,
      employee,
    };
    if (skill.description || (skill.description && skill.description.trim() === '')) {
      this.skilldialog.open(SkillDescriptionComponent, dialogConfig);
    } else {
      this.notificationService.showError('This skill has no description added');
    }
  }

  // for sorting General Rank checkboxes
  private sortGeneralRanks(genRank1: string, genRank2: string) {
    return genRank1 < genRank2 ? -1 : 1;
  }
  private groupArrayIntoPairs(array: any[], depth: number = 3): any[][] {
    let master: any[][] = [];
    let group: any[] = [];

    for (let i = 0; i < array.length; i++) {
      let index = i + 1;
      const element = array[i];

      if (!element) continue;

      group.push(element);

      if (index % depth === 0) {
        master.push(group.filter((member) => member !== null));
        group = [];
      }
    }

    if (group.length !== 0) master.push(group.filter((member) => member !== null));

    return master;
  }

  private fetchProjects() {
    this.store.dispatch(new ProjectsActions.GetProjects());
    this.store.select('projects').subscribe((response: any) => {
      if (response?.projects) {
        this.projects = response.projects;
      }
    });
  }

  public filterByName(input: string) {
    this.filterGroup.name = input.split(' ').join('').toLowerCase().trim();
    this.filteredEmployees = this.filterEmployeesViaFilterGroup();
  }

  public filterByTechSkill(input: string) {
    const skillName = input.split(' ').join('').toLowerCase().trim();
    if (skillName === '') {
      this.techSkillInputCountModifier = 0;
      this.filterGroup.skills = [];
    } else {
      this.techSkillInputCountModifier = 1;
      this.filterGroup.skills = [skillName];
    }
    this.filteredEmployees = this.filterEmployeesViaFilterGroup();
  }

  public filterWithCheckbox(input: string, event: any, filterType: string) {
    let objectPath = filterType;
    const isChecked = event.checked;
    if (isChecked) ++this.tickedCheckboxes;
    else --this.tickedCheckboxes;
    switch (filterType) {
      case 'roles':
        objectPath = 'roles';
        break;
    }

    // Isolate arrays
    if (Array.isArray(this.filterGroup[objectPath])) {
      // Assume we are filtering either skills or projects
      if (isChecked) {
        // If the checkbox is checked, append to the array
        this.filterGroup[objectPath].push(input);
      } else {
        // Else, splice out the filter from the array itself.
        const index = this.filterGroup[objectPath].indexOf(input);
        this.filterGroup[objectPath].splice(index, 1);
      }
    } else {
      // If we are filtering values that are not plural, uncheck the rest of the checkboxes
      let checkboxes = Array.from(document.querySelectorAll(`[data-filtertype=${objectPath}]`));
      const targetIndex = checkboxes.indexOf(event.target);
      checkboxes.splice(targetIndex, 1);
      checkboxes.forEach((checkbox) => checkbox.classList.remove('mat-checkbox-checked'));
      this.filterGroup[objectPath] = isChecked ? input : '';
    }
    this.filteredEmployees = this.filterEmployeesViaFilterGroup();
  }
  private filterEmployeesViaFilterGroup(
    employees: Array<Employee> = this.employees,
    filterProjects = true
  ): Array<Employee> {
    return employees.filter((employee: Employee) => {
      const hasProjects =
        //this.filterGroup.projects.length===null
        //?  this.filterGroup.projects.some((project) => employee.projects.map((p) => p.name).includes(project.name))
        //: true;
        this.filterGroup.projects.length > 0
          ? this.filterGroup.projects.some((project) => employee.projects.map((p) => p.name).includes(project.name))
          : true;

      const hasSkills =
        this.filterGroup.skills.length > 0
          ? this.filterGroup.skills.some((skill) => {
              const filterWithoutSkillLevel = (s: Skill) => {
                if (s.skillname.toLowerCase().includes(skill.trim().toLowerCase())) {
                  return s;
                } else {
                  return false;
                }
              };
              const filterWithSkillLevel = (s: Skill) => {
                if (
                  s.skillname.toLowerCase().includes(skill.trim().toLowerCase()) &&
                  s.level === this.filterGroup.level
                ) {
                  return s;
                } else {
                  return false;
                }
              };

              const filtered = employee.skills.filter((s) => {
                // if (!Number.isNaN(this.filterGroup.level)) {
                if (this.isSkillLevelChecked) {
                  return filterWithSkillLevel(s);
                }

                return filterWithoutSkillLevel(s);
              });

              return filtered.length === 0 ? false : true;
            })
          : true;

      const hasRoles = this.filterGroup.roles.length > 0 ? this.filterGroup.roles.includes(employee.title) : true;

      const hasGeneralRanks =
        this.filterGroup.generalRanks.length > 0 ? this.filterGroup.generalRanks.includes(employee.generalRank) : true;

      const hasDomains =
        this.filterGroup.domains.length > 0 ? this.filterGroup.domains.includes(employee.domain) : true;

      const hasSkillGroups =
        this.filterGroup.skillGroups.length > 0 ? this.filterGroup.skillGroups.includes(employee.skillGroup) : true;

      const includesName = `${employee.firstName}${employee.lastName}`.toLowerCase().includes(this.filterGroup.name);
      if (
        hasSkillGroups &&
        hasDomains &&
        hasGeneralRanks &&
        hasRoles &&
        (filterProjects ? hasProjects : true) &&
        hasSkills &&
        includesName
      ) {
        return employee;
      }
    });
  }

  public whichSortOption(option: SortOption) {
    this.sortOption = option;
    function sortBy(employee1: Employee, employee2: Employee) {
      if (option.sortType == 'Ascending') {
        return employee1[`${formatSortOption(option)}`] < employee2[`${formatSortOption(option)}`] ? -1 : 1;
      } else {
        return employee1[`${formatSortOption(option)}`] < employee2[`${formatSortOption(option)}`] ? 1 : -1;
      }
    }
    function formatSortOption(option: SortOption): string {
      if (option.name.includes('Name')) {
        return 'firstName';
      } else if (option.name.includes('General Rank')) {
        return 'generalRank';
      }
    }
    this.filteredEmployees = this.filteredEmployees.sort(sortBy);
  }

  /** Retrieve list of skills */
  public moveToPastEmployees(employee: Employee): void {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = true;
    dialogOptions.width = '600px';
    dialogOptions.data = {};

    const dialogRef = this.dialog.open(SetPastEmployeeComponent, dialogOptions);
    dialogRef.afterClosed().subscribe((data) => {
      if (!data) return;

      const pastEmployee: Employee = JSON.parse(JSON.stringify(employee));
      pastEmployee.dateLeft = new Date(data.dateLeft);
      this.store.dispatch(new EmployeesActions.UpdateEmployee(pastEmployee));
    });
  }

  deselectAllStars() {
    const stars = document.querySelectorAll('[data-rank]');
    // Remove all star classes
    for (let i = 0; i < stars.length; i++) {
      stars[i].classList.remove('blue-icon');
    }
  }

  selectStars(level: number) {
    const stars = document.querySelectorAll('[data-rank]');
    for (let i = 0; i < level; i++) {
      stars[i].classList.add('blue-icon');
    }
  }

  mouseOverStars(event: any) {
    const level = parseInt(event.target.getAttribute('data-rank'));
    this.deselectAllStars();
    this.selectStars(level);
  }

  mouseLeaveStars() {
    const level = this.filterGroup.level;
    this.deselectAllStars();
    this.selectStars(level);
  }

  getSkillLevelFilter(event: any) {
    this.isSkillLevelChecked = true;
    this.filterGroup.level = parseInt(event.target.getAttribute('data-rank'));

    this.deselectAllStars();
    this.selectStars(this.filterGroup.level);
    this.filteredEmployees = this.filterEmployeesViaFilterGroup();

    ++this.tickedCheckboxes;
  }

  getFilterCount(objectPath: string, input: string): number {
    const result = this.counter[objectPath].find((o) => o.name === input);
    return result ? result.count : 0;
  }

  ngOnInit(): void {
    this.fetchEmployees();
    this.fetchProjects();
  }
  @ViewChildren('checkboxes') checkboxes: QueryList<any>;

  values = [''];

  uncheckAll() {
    this.filterGroup = {
      generalRanks: [],
      roles: [],
      skills: [],
      skillGroups: [],
      domains: [],
      projects: [],
      level: null,
      name: '',
    };
    this.tickedCheckboxes = 0;
    this.isSkillLevelChecked = false;
    this.isUnassignedChecked = false;
    this.checkboxes.forEach((element) => (element.checked = false));

    this.deselectAllStars();

    // Reset employee list
    this.filteredEmployees = this.employees;
  }

  editEmployee(employee: Employee): void {
    const dialogOptions = new MatDialogConfig();
    dialogOptions.disableClose = false;
    dialogOptions.data = { parent: this };
    dialogOptions.maxWidth = '100vw';
    dialogOptions.maxHeight = '100vh';
    dialogOptions.height = '100%';
    dialogOptions.width = '100%';
    dialogOptions.data = { employee: employee, parent: this };

    const dialogRef = this.dialog.open(EditEmployeeComponent, dialogOptions);

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        // if nothing was edited
        dialogRef.close();
        return;
      }
      const index = this.employees.findIndex((employee) => employee.id === data.id);
      // this.employees is a part of state which makes it immutable so it has to be copied before editing
      let updatedEmployees = [...this.employees];
      updatedEmployees[index] = data;
      this.employees = updatedEmployees;
      this.filteredEmployees = updatedEmployees;
    });
  }
  removeDuplicates(employees: Array<Employee>): Array<Employee> {
    return employees.filter((employee, index, arr) => {
      return arr.map((o) => o.id).indexOf(employee.id) === index;
    });
  }

  //General RankASC
  public sortGeneralRankCheckboxes(genRank1: string, genRank2: string) {
    return genRank1 < genRank2 ? -1 : 1;
  }
}
