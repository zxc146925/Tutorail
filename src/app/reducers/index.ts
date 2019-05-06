import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromEmployee from './Employee/employee.reducer';
import * as fromStudent from './Student/student.reducer';
import * as fromGroup from './Group/group.reducer';
import * as fromClass from './Class/class.reducer';
import * as fromArea from './Area/area.reducer';
import * as fromHandout from './Handout/handout.reducer';
import * as fromUI from './UI/ui.reducer';
import * as fromDrawer from './Drawer/drawer.reducer';

export interface State {

  employees: fromEmployee.State;
  students: fromStudent.State;
  groups: fromGroup.State;
  classes: fromClass.State;
  areas: fromArea.State;
  handouts: fromHandout.State;
  uI: fromUI.State;
  drawer: fromDrawer.State;
}

export const reducers: ActionReducerMap<State> = {

  employees: fromEmployee.reducer,
  students: fromStudent.reducer,
  groups: fromGroup.reducer,
  classes: fromClass.reducer,
  areas: fromArea.reducer,
  handouts: fromHandout.reducer,
  uI: fromUI.reducer,
  drawer: fromDrawer.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
