import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Student } from 'src/app/reducers/Student/student.model';
import * as StudentAction from "../../reducers/Student/student.actions";
import { Observable, from, zip } from 'rxjs';
import { toArray, map, filter, merge, mergeMap } from "rxjs/Operators";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [];
  abc = undefined
  constructor(private _store: Store<any>) { }

  ngOnInit() {

    // this._store.subscribe(datas => {
    //   // console.log('x',datas['students']);
    //   // console.log('y',datas['classes']);
    //   const students = datas['students']['ids'];
    //   const classes = datas['classes']['ids'];

    // })

    this._store.subscribe(datas => {
      // console.log('x',datas['students']);
      // console.log('y',datas['classes']);
      console.log('StoreDatas',datas);
      // const students = datas["students"]["ids"];
      // const classes = datas["classes"]["ids"];
      this.buildStudentList(datas);
      console.log(this.studentList);
    });
  }

  buildStudentList(state) {
    from(state["students"]["ids"]).pipe(
      map(theStudentId => {
        return {
          ...state["students"]["entities"][`${theStudentId}`],
          class:
            state["classes"]["entities"][
              state["students"]["entities"][`${theStudentId}`]["class"]
            ]
        };
      }),
      toArray()
    ).subscribe(
      studentList => this.studentList = studentList
    );
  }
  // buildData(value) {
  //   from(value['ids']).pipe(
  //     map(theId => {
  //       // console.log('yy',value['entities'][`${theId}`]);
  //       return value['entities'][`${theId}`];
  //     }),
  //     toArray()
  //   ).subscribe(thestudent => {
  //     this.students$ = thestudent;
  //     console.log('thestudent', this.students$);
  //   })
  // }

}
