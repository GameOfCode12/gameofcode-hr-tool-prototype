import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import {
  AddProjectFailed,
  AddProjectSuccess,
  ProjectsActionType,
  DeleteProjectFailed,
  DeleteProjectSuccess,
  GetProjectsFailed,
  GetProjectsSuccess,
  UpdateProjectFailed,
  UpdateProjectSuccess,
} from '../actions/projects.actions';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project/project.service';

@Injectable()
export class ProjectsEffects {
  constructor(private actions$: Actions, private projectService: ProjectService) {}

  @Effect()
  // sort projects in ascending order when fetching them
  getProjects$ = this.actions$.pipe(
    ofType(ProjectsActionType.GET_PROJECTS),
    switchMap(() =>
      this.projectService.getProjects().pipe(
        map((projects: Project[]) => new GetProjectsSuccess(projects.sort((a, b) => a.id - b.id))),
        catchError((error) => of(new GetProjectsFailed(error)))
      )
    ),
    take(1)
  );

  @Effect()
  addProject$ = this.actions$.pipe(
    ofType(ProjectsActionType.ADD_PROJECT),
    switchMap((action) =>
      this.projectService.addProject(action['payload']).pipe(
        map((project: Project) => new AddProjectSuccess(project)),
        catchError((error) => of(new AddProjectFailed(error)))
      )
    )
  );

  @Effect()
  updateProject$ = this.actions$.pipe(
    ofType(ProjectsActionType.UPDATE_PROJECT),
    switchMap((action) =>
      this.projectService.updateProject(action['payload']).pipe(
        map((project: Project) => new UpdateProjectSuccess(project)),
        catchError((error) => of(new UpdateProjectFailed(error)))
      )
    )
  );

  @Effect()
  deleteProject$ = this.actions$.pipe(
    ofType(ProjectsActionType.DELETE_PROJECT),
    switchMap((action) =>
      this.projectService.deleteProject(action['payload']).pipe(
        map((project: Project) => new DeleteProjectSuccess(project)),
        catchError((error) => of(new DeleteProjectFailed(error)))
      )
    )
  );
}
