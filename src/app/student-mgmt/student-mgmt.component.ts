import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../mock-students';
import { ServiceService } from '../service.service';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { GetStudents, PostStudent } from '../reducers/student/student.actions';
import { filter, map, toArray } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-student-mgmt',
  templateUrl: './student-mgmt.component.html',
  styleUrls: ['./student-mgmt.component.css']
})
export class StudentMgmtComponent implements OnInit {
  students = [];
  newStudent = {
    id: undefined,
    no: undefined,
    name: undefined
  };

  constructor(private _store: Store<State>) {
    this._store.dispatch(new GetStudents());
    this._store.pipe(
      filter(state => state.students.ids.length > 0)
    ).subscribe(data => {
      console.log('data', data);
      this.buildStudentList(data.students);
    })
  }

  ngOnInit() {
  }


  buildStudentList(data) {
    from(data['ids']).pipe(
      map(theId => {
        data['entities'][`${theId}`];
        console.log('111111', data['entities'][`${theId}`]);
      }),
      toArray()
    ).subscribe(theStudent => {
      this.students = theStudent;
    })
  }

  postStudent() {
    this._store.dispatch(new PostStudent(this.newStudent));
  }

}
