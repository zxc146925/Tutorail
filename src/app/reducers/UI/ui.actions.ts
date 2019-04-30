import { Action } from '@ngrx/store';

export enum UIActionTypes {
  SelectedList = '[UI] Select List',
}

export class SelectedList implements Action {
  readonly type = UIActionTypes.SelectedList;
  constructor(public payload:any) {}
}


export type UIActions = SelectedList;
