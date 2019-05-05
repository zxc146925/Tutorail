import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { StudentActionTypes, GetStudents_Successed, GetStudents_Failed, PostStudent_Success, PostStudent_Failed } from '../reducers/student/student.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ServiceService } from '../service.service';



@Injectable()
export class EffectEffects {



  constructor(private actions$: Actions, private httpService: ServiceService) { }


  @Effect()
  getStudent$: Observable<any> = this.actions$.pipe(
    ofType(StudentActionTypes.GetStudents),
    mergeMap(action => this.httpService.getStudents().pipe(
      map(data => {
        console.log('Effects Get Students data', data);
        return new GetStudents_Successed(data);
      }),
      catchError(err => of(new GetStudents_Failed(err)))
    )
    )
  )

  @Effect()
  getPostStudent$: Observable<any> = this.actions$.pipe(
    ofType(StudentActionTypes.PostStudent),
    mergeMap(action => this.httpService.postStudent(action['payload']).pipe( 
      map(data => {
        console.log('Effects Post Students data', data);
        return new PostStudent_Success(data);
      }),
      catchError(err => of(new PostStudent_Failed(err)))
    )
    )
  )
}
