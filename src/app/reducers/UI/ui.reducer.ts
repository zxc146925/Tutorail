import { Action } from '@ngrx/store';
import { UIActions, UIActionTypes } from './ui.actions';


export interface State {
  SelectItem: string;
}

export const initialState: State = {
  SelectItem: ''
};

export function reducer(state = initialState, action: UIActions): State {
  switch (action.type) {

    case UIActionTypes.Selectitem: {
      state.SelectItem = action.payload;
      console.log('action', action.payload);
      return state;
    }
    default:
      return state;
  }
}
