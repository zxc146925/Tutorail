import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Area } from './area.model';

export enum AreaActionTypes {
  LoadAreas = '[Area] Load Areas',
  AddArea = '[Area] Add Area',
  UpsertArea = '[Area] Upsert Area',
  AddAreas = '[Area] Add Areas',
  UpsertAreas = '[Area] Upsert Areas',
  UpdateArea = '[Area] Update Area',
  UpdateAreas = '[Area] Update Areas',
  DeleteArea = '[Area] Delete Area',
  DeleteAreas = '[Area] Delete Areas',
  ClearAreas = '[Area] Clear Areas'
}

export class LoadAreas implements Action {
  readonly type = AreaActionTypes.LoadAreas;

  constructor(public payload: { areas: Area[] }) {}
}

export class AddArea implements Action {
  readonly type = AreaActionTypes.AddArea;

  constructor(public payload: { area: Area }) {}
}

export class UpsertArea implements Action {
  readonly type = AreaActionTypes.UpsertArea;

  constructor(public payload: { area: Area }) {}
}

export class AddAreas implements Action {
  readonly type = AreaActionTypes.AddAreas;

  constructor(public payload: { areas: Area[] }) {}
}

export class UpsertAreas implements Action {
  readonly type = AreaActionTypes.UpsertAreas;

  constructor(public payload: { areas: Area[] }) {}
}

export class UpdateArea implements Action {
  readonly type = AreaActionTypes.UpdateArea;

  constructor(public payload: { area: Update<Area> }) {}
}

export class UpdateAreas implements Action {
  readonly type = AreaActionTypes.UpdateAreas;

  constructor(public payload: { areas: Update<Area>[] }) {}
}

export class DeleteArea implements Action {
  readonly type = AreaActionTypes.DeleteArea;

  constructor(public payload: { id: string }) {}
}

export class DeleteAreas implements Action {
  readonly type = AreaActionTypes.DeleteAreas;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearAreas implements Action {
  readonly type = AreaActionTypes.ClearAreas;
}

export type AreaActions =
 LoadAreas
 | AddArea
 | UpsertArea
 | AddAreas
 | UpsertAreas
 | UpdateArea
 | UpdateAreas
 | DeleteArea
 | DeleteAreas
 | ClearAreas;
