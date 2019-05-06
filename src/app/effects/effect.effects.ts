import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ServiceService } from '../service.service';
import { Observable, of } from 'rxjs';
import { StudentActionTypes, GetSuccStudent, GetFailStudent } from '../reducers/Student/student.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ClassActionTypes, GetSuccClass, GetFailClass } from '../reducers/Class/class.actions';



@Injectable()
export class EffectEffects {



  constructor(private actions$: Actions,private service:ServiceService) {}


  @Effect()
  getStudent : Observable<any> = this.actions$.pipe(
    ofType(StudentActionTypes.GetStudent),
    mergeMap(action => this.service.getStudents().pipe(
      map(state =>{
        console.log('student',state);
        return new GetSuccStudent(state);
      })
    )),
    catchError(err =>of(new GetFailStudent(err)))
  )

  @Effect()
  getClass : Observable<any> = this.actions$.pipe(
    ofType(ClassActionTypes.GetClass),
    mergeMap(action => this.service.getClasses().pipe(
      map(state =>{
        console.log('class',state);
        return new GetSuccClass(state);
      })
    )),
    catchError(err =>of(new GetFailClass(err)))
  )

}