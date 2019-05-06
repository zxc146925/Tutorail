import { Action } from '@ngrx/store';

export enum UIActionTypes {
  LoadUIs = '[UI] Load UIs',
  Selectitem = '[UI] select item'

}

export class LoadUIs implements Action {
  readonly type = UIActionTypes.LoadUIs;
}

export class Selectitem implements Action {
  readonly type = UIActionTypes.Selectitem;
  constructor(public payload: any) {

  }
}


export type UIActions =
  LoadUIs | Selectitem
  ;
