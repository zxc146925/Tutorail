import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Handout } from './handout.model';

export enum HandoutActionTypes {
  LoadHandouts = '[Handout] Load Handouts',
  AddHandout = '[Handout] Add Handout',
  UpsertHandout = '[Handout] Upsert Handout',
  AddHandouts = '[Handout] Add Handouts',
  UpsertHandouts = '[Handout] Upsert Handouts',
  UpdateHandout = '[Handout] Update Handout',
  UpdateHandouts = '[Handout] Update Handouts',
  DeleteHandout = '[Handout] Delete Handout',
  DeleteHandouts = '[Handout] Delete Handouts',
  ClearHandouts = '[Handout] Clear Handouts'
}

export class LoadHandouts implements Action {
  readonly type = HandoutActionTypes.LoadHandouts;

  constructor(public payload: { handouts: Handout[] }) {}
}

export class AddHandout implements Action {
  readonly type = HandoutActionTypes.AddHandout;

  constructor(public payload: { handout: Handout }) {}
}

export class UpsertHandout implements Action {
  readonly type = HandoutActionTypes.UpsertHandout;

  constructor(public payload: { handout: Handout }) {}
}

export class AddHandouts implements Action {
  readonly type = HandoutActionTypes.AddHandouts;

  constructor(public payload: { handouts: Handout[] }) {}
}

export class UpsertHandouts implements Action {
  readonly type = HandoutActionTypes.UpsertHandouts;

  constructor(public payload: { handouts: Handout[] }) {}
}

export class UpdateHandout implements Action {
  readonly type = HandoutActionTypes.UpdateHandout;

  constructor(public payload: { handout: Update<Handout> }) {}
}

export class UpdateHandouts implements Action {
  readonly type = HandoutActionTypes.UpdateHandouts;

  constructor(public payload: { handouts: Update<Handout>[] }) {}
}

export class DeleteHandout implements Action {
  readonly type = HandoutActionTypes.DeleteHandout;

  constructor(public payload: { id: string }) {}
}

export class DeleteHandouts implements Action {
  readonly type = HandoutActionTypes.DeleteHandouts;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearHandouts implements Action {
  readonly type = HandoutActionTypes.ClearHandouts;
}

export type HandoutActions =
 LoadHandouts
 | AddHandout
 | UpsertHandout
 | AddHandouts
 | UpsertHandouts
 | UpdateHandout
 | UpdateHandouts
 | DeleteHandout
 | DeleteHandouts
 | ClearHandouts;
