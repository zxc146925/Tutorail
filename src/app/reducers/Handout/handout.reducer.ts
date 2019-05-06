import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Handout } from './handout.model';
import { HandoutActions, HandoutActionTypes } from './handout.actions';

export interface State extends EntityState<Handout> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Handout> = createEntityAdapter<Handout>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: HandoutActions
): State {
  switch (action.type) {
    case HandoutActionTypes.AddHandout: {
      return adapter.addOne(action.payload.handout, state);
    }

    case HandoutActionTypes.UpsertHandout: {
      return adapter.upsertOne(action.payload.handout, state);
    }

    case HandoutActionTypes.AddHandouts: {
      return adapter.addMany(action.payload.handouts, state);
    }

    case HandoutActionTypes.UpsertHandouts: {
      return adapter.upsertMany(action.payload.handouts, state);
    }

    case HandoutActionTypes.UpdateHandout: {
      return adapter.updateOne(action.payload.handout, state);
    }

    case HandoutActionTypes.UpdateHandouts: {
      return adapter.updateMany(action.payload.handouts, state);
    }

    case HandoutActionTypes.DeleteHandout: {
      return adapter.removeOne(action.payload.id, state);
    }

    case HandoutActionTypes.DeleteHandouts: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case HandoutActionTypes.LoadHandouts: {
      return adapter.addAll(action.payload.handouts, state);
    }

    case HandoutActionTypes.ClearHandouts: {
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
