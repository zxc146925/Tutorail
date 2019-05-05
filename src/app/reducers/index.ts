import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromStudent from './student/student.reducer';


export interface State {

  students: fromStudent.State;

}

export const reducers: ActionReducerMap<State> = {

  students: fromStudent.reducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
