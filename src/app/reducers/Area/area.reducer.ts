import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Area } from './area.model';
import { AreaActions, AreaActionTypes } from './area.actions';

export interface State extends EntityState<Area> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Area> = createEntityAdapter<Area>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: AreaActions
): State {
  switch (action.type) {
    case AreaActionTypes.AddArea: {
      return adapter.addOne(action.payload.area, state);
    }

    case AreaActionTypes.UpsertArea: {
      return adapter.upsertOne(action.payload.area, state);
    }

    case AreaActionTypes.AddAreas: {
      return adapter.addMany(action.payload.areas, state);
    }

    case AreaActionTypes.UpsertAreas: {
      return adapter.upsertMany(action.payload.areas, state);
    }

    case AreaActionTypes.UpdateArea: {
      return adapter.updateOne(action.payload.area, state);
    }

    case AreaActionTypes.UpdateAreas: {
      return adapter.updateMany(action.payload.areas, state);
    }

    case AreaActionTypes.DeleteArea: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AreaActionTypes.DeleteAreas: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AreaActionTypes.LoadAreas: {
      return adapter.addAll(action.payload.areas, state);
    }

    case AreaActionTypes.ClearAreas: {
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
