
import { UIActionTypes, UIActions } from './ui.actions';


export interface State {
  selcetedList : any,
}

export const initialState: State = {
  selcetedList : 'student',
};

export function reducer(state = initialState, action: UIActions): State {
  switch (action.type) {

    case UIActionTypes.SelectedList: {
      state.selcetedList = action.payload;
      return state;
    }

    default:
      return state;
  }
}
