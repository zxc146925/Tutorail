import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromStudent from './Student/student.reducer';
import * as fromClass from './Class/class.reducer';
import * as fromUI from './UI/ui.reducer';

export interface State {
  students: fromStudent.State;
  classes: fromClass.State;
  UI: fromUI.State;
}

export const reducers: ActionReducerMap<State> = {

  students: fromStudent.reducer,
  classes: fromClass.reducer,
  UI: fromUI.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
