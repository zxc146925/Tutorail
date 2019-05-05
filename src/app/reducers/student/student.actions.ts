import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Student } from './student.model';

export enum StudentActionTypes {
  LoadStudents = '[Student] Load Students',
  AddStudent = '[Student] Add Student',
  UpsertStudent = '[Student] Upsert Student',
  AddStudents = '[Student] Add Students',
  UpsertStudents = '[Student] Upsert Students',
  UpdateStudent = '[Student] Update Student',
  UpdateStudents = '[Student] Update Students',
  DeleteStudent = '[Student] Delete Student',
  DeleteStudents = '[Student] Delete Students',
  ClearStudents = '[Student] Clear Students',

  GetStudents = '[Student] Get Students',
  GetStudents_Successed = '[Student] GetSucessed Students',
  GetStudents_Failed = '[Student] GetFailed Students',

  PostStudent = '[Student] Post Student',
  PostStudent_Success = '[Student] PostSucessed Student',
  PostStudent_Failed = '[Student] PostFailed Student'
}

export class LoadStudents implements Action {
  readonly type = StudentActionTypes.LoadStudents;

  constructor(public payload: { students: Student[] }) { }
}

export class AddStudent implements Action {
  readonly type = StudentActionTypes.AddStudent;

  constructor(public payload: { student: Student }) { }
}

export class UpsertStudent implements Action {
  readonly type = StudentActionTypes.UpsertStudent;

  constructor(public payload: { student: Student }) { }
}

export class AddStudents implements Action {
  readonly type = StudentActionTypes.AddStudents;

  constructor(public payload: { students: Student[] }) { }
}

export class UpsertStudents implements Action {
  readonly type = StudentActionTypes.UpsertStudents;

  constructor(public payload: { students: Student[] }) { }
}

export class UpdateStudent implements Action {
  readonly type = StudentActionTypes.UpdateStudent;

  constructor(public payload: { student: Update<Student> }) { }
}

export class UpdateStudents implements Action {
  readonly type = StudentActionTypes.UpdateStudents;

  constructor(public payload: { students: Update<Student>[] }) { }
}

export class DeleteStudent implements Action {
  readonly type = StudentActionTypes.DeleteStudent;

  constructor(public payload: { id: string }) { }
}

export class DeleteStudents implements Action {
  readonly type = StudentActionTypes.DeleteStudents;

  constructor(public payload: { ids: string[] }) { }
}

export class ClearStudents implements Action {
  readonly type = StudentActionTypes.ClearStudents;
}



export class GetStudents implements Action {
  readonly type = StudentActionTypes.GetStudents; 
  constructor() { }
}

export class GetStudents_Successed implements Action {
  readonly type = StudentActionTypes.GetStudents_Successed;
  constructor(public payload: any) { }
}

export class GetStudents_Failed implements Action {
  readonly type = StudentActionTypes.GetStudents_Failed;
  constructor(public payload: any) { }
}

export class PostStudent implements Action {
  readonly type = StudentActionTypes.PostStudent;
  constructor(public payload: any) { }
}

export class PostStudent_Success implements Action {
  readonly type = StudentActionTypes.PostStudent_Success;
  constructor(public payload: any) { }
}

export class PostStudent_Failed implements Action {
  readonly type = StudentActionTypes.PostStudent_Failed;
  constructor(public payload: any) { }
}

export type StudentActions =
  LoadStudents
  | AddStudent
  | UpsertStudent
  | AddStudents
  | UpsertStudents
  | UpdateStudent
  | UpdateStudents
  | DeleteStudent
  | DeleteStudents
  | ClearStudents
  | GetStudents
  | GetStudents_Successed
  | GetStudents_Failed
  | PostStudent
  | PostStudent_Success
  | PostStudent_Failed;
