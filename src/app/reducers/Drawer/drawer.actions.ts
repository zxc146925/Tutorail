import { Action } from '@ngrx/store';

export enum DrawerActionTypes {
  LoadDrawers = '[Drawer] Load Drawers',
  
  
}

export class LoadDrawers implements Action {
  readonly type = DrawerActionTypes.LoadDrawers;
}


export type DrawerActions = LoadDrawers;
