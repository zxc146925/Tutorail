import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Class } from './class.model';
import { ClassActions, ClassActionTypes } from './class.actions';

export interface State extends EntityState<Class> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Class> = createEntityAdapter<Class>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: ClassActions
): State {
  switch (action.type) {
    case ClassActionTypes.AddClass: {
      return adapter.addOne(action.payload.class, state);
    }

    case ClassActionTypes.UpsertClass: {
      return adapter.upsertOne(action.payload.class, state);
    }

    case ClassActionTypes.AddClasss: {
      return adapter.addMany(action.payload.classs, state);
    }

    case ClassActionTypes.UpsertClasss: {
      return adapter.upsertMany(action.payload.classs, state);
    }

    case ClassActionTypes.UpdateClass: {
      return adapter.updateOne(action.payload.class, state);
    }

    case ClassActionTypes.UpdateClasss: {
      return adapter.updateMany(action.payload.classs, state);
    }

    case ClassActionTypes.DeleteClass: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ClassActionTypes.DeleteClasss: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ClassActionTypes.LoadClasss: {
      return adapter.addAll(action.payload.classs, state);
    }

    case ClassActionTypes.ClearClasss: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
