import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Group } from './group.model';
import { GroupActions, GroupActionTypes } from './group.actions';

export interface State extends EntityState<Group> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Group> = createEntityAdapter<Group>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: GroupActions
): State {
  switch (action.type) {
    case GroupActionTypes.AddGroup: {
      return adapter.addOne(action.payload.group, state);
    }

    case GroupActionTypes.UpsertGroup: {
      return adapter.upsertOne(action.payload.group, state);
    }

    case GroupActionTypes.AddGroups: {
      return adapter.addMany(action.payload.groups, state);
    }

    case GroupActionTypes.UpsertGroups: {
      return adapter.upsertMany(action.payload.groups, state);
    }

    case GroupActionTypes.UpdateGroup: {
      return adapter.updateOne(action.payload.group, state);
    }

    case GroupActionTypes.UpdateGroups: {
      return adapter.updateMany(action.payload.groups, state);
    }

    case GroupActionTypes.DeleteGroup: {
      return adapter.removeOne(action.payload.id, state);
    }

    case GroupActionTypes.DeleteGroups: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case GroupActionTypes.LoadGroups: {
      return adapter.addAll(action.payload.groups, state);
    }

    case GroupActionTypes.ClearGroups: {
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
