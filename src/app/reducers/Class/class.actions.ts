import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Class } from './class.model';

export enum ClassActionTypes {
  LoadClasss = '[Class] Load Classs',
  AddClass = '[Class] Add Class',
  UpsertClass = '[Class] Upsert Class',
  AddClasss = '[Class] Add Classs',
  UpsertClasss = '[Class] Upsert Classs',
  UpdateClass = '[Class] Update Class',
  UpdateClasss = '[Class] Update Classs',
  DeleteClass = '[Class] Delete Class',
  DeleteClasss = '[Class] Delete Classs',
  ClearClasss = '[Class] Clear Classs',
  GetClass ='[Class] get Class',
  GetSuccClass ='[Class] succ Class',
  GetFailClass ='[Class] fail Class'
}

export class LoadClasss implements Action {
  readonly type = ClassActionTypes.LoadClasss;

  constructor(public payload: { classs: Class[] }) {}
}

export class AddClass implements Action {
  readonly type = ClassActionTypes.AddClass;

  constructor(public payload: { class: Class }) {}
}

export class UpsertClass implements Action {
  readonly type = ClassActionTypes.UpsertClass;

  constructor(public payload: { class: Class }) {}
}

export class AddClasss implements Action {
  readonly type = ClassActionTypes.AddClasss;

  constructor(public payload: { classs: Class[] }) {}
}

export class UpsertClasss implements Action {
  readonly type = ClassActionTypes.UpsertClasss;

  constructor(public payload: { classs: Class[] }) {}
}

export class UpdateClass implements Action {
  readonly type = ClassActionTypes.UpdateClass;

  constructor(public payload: { class: Update<Class> }) {}
}

export class UpdateClasss implements Action {
  readonly type = ClassActionTypes.UpdateClasss;

  constructor(public payload: { classs: Update<Class>[] }) {}
}

export class DeleteClass implements Action {
  readonly type = ClassActionTypes.DeleteClass;

  constructor(public payload: { id: string }) {}
}

export class DeleteClasss implements Action {
  readonly type = ClassActionTypes.DeleteClasss;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearClasss implements Action {
  readonly type = ClassActionTypes.ClearClasss;
}
export class GetClass implements Action{
  readonly type = ClassActionTypes.GetClass;
  constructor(){}
}

export class GetSuccClass implements Action{
  readonly type = ClassActionTypes.GetSuccClass;
  constructor(public payload:any){}
}

export class GetFailClass implements Action{
  readonly type = ClassActionTypes.GetFailClass;
  constructor(public payload:any){}
}

export type ClassActions =
 LoadClasss
 | AddClass
 | UpsertClass
 | AddClasss
 | UpsertClasss
 | UpdateClass
 | UpdateClasss
 | DeleteClass
 | DeleteClasss
 | ClearClasss
 | GetClass
 | GetFailClass
 | GetSuccClass;
