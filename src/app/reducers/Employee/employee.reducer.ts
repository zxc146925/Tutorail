import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Employee } from './employee.model';
import { EmployeeActions, EmployeeActionTypes } from './employee.actions';

export interface State extends EntityState<Employee> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: EmployeeActions
): State {
  switch (action.type) {
    case EmployeeActionTypes.AddEmployee: {
      return adapter.addOne(action.payload.employee, state);
    }

    case EmployeeActionTypes.UpsertEmployee: {
      return adapter.upsertOne(action.payload.employee, state);
    }

    case EmployeeActionTypes.AddEmployees: {
      return adapter.addMany(action.payload.employees, state);
    }

    case EmployeeActionTypes.UpsertEmployees: {
      return adapter.upsertMany(action.payload.employees, state);
    }

    case EmployeeActionTypes.UpdateEmployee: {
      return adapter.updateOne(action.payload.employee, state);
    }

    case EmployeeActionTypes.UpdateEmployees: {
      return adapter.updateMany(action.payload.employees, state);
    }

    case EmployeeActionTypes.DeleteEmployee: {
      return adapter.removeOne(action.payload.id, state);
    }

    case EmployeeActionTypes.DeleteEmployees: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case EmployeeActionTypes.LoadEmployees: {
      return adapter.addAll(action.payload.employees, state);
    }

    case EmployeeActionTypes.ClearEmployees: {
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
