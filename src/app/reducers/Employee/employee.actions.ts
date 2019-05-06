import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Employee } from './employee.model';

export enum EmployeeActionTypes {
  LoadEmployees = '[Employee] Load Employees',
  AddEmployee = '[Employee] Add Employee',
  UpsertEmployee = '[Employee] Upsert Employee',
  AddEmployees = '[Employee] Add Employees',
  UpsertEmployees = '[Employee] Upsert Employees',
  UpdateEmployee = '[Employee] Update Employee',
  UpdateEmployees = '[Employee] Update Employees',
  DeleteEmployee = '[Employee] Delete Employee',
  DeleteEmployees = '[Employee] Delete Employees',
  ClearEmployees = '[Employee] Clear Employees'
}

export class LoadEmployees implements Action {
  readonly type = EmployeeActionTypes.LoadEmployees;

  constructor(public payload: { employees: Employee[] }) {}
}

export class AddEmployee implements Action {
  readonly type = EmployeeActionTypes.AddEmployee;

  constructor(public payload: { employee: Employee }) {}
}

export class UpsertEmployee implements Action {
  readonly type = EmployeeActionTypes.UpsertEmployee;

  constructor(public payload: { employee: Employee }) {}
}

export class AddEmployees implements Action {
  readonly type = EmployeeActionTypes.AddEmployees;

  constructor(public payload: { employees: Employee[] }) {}
}

export class UpsertEmployees implements Action {
  readonly type = EmployeeActionTypes.UpsertEmployees;

  constructor(public payload: { employees: Employee[] }) {}
}

export class UpdateEmployee implements Action {
  readonly type = EmployeeActionTypes.UpdateEmployee;

  constructor(public payload: { employee: Update<Employee> }) {}
}

export class UpdateEmployees implements Action {
  readonly type = EmployeeActionTypes.UpdateEmployees;

  constructor(public payload: { employees: Update<Employee>[] }) {}
}

export class DeleteEmployee implements Action {
  readonly type = EmployeeActionTypes.DeleteEmployee;

  constructor(public payload: { id: string }) {}
}

export class DeleteEmployees implements Action {
  readonly type = EmployeeActionTypes.DeleteEmployees;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearEmployees implements Action {
  readonly type = EmployeeActionTypes.ClearEmployees;
}

export type EmployeeActions =
 LoadEmployees
 | AddEmployee
 | UpsertEmployee
 | AddEmployees
 | UpsertEmployees
 | UpdateEmployee
 | UpdateEmployees
 | DeleteEmployee
 | DeleteEmployees
 | ClearEmployees;
