import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  theStudents;
  constructor(private _store: Store<any>) { }

  ngOnInit() {
    this._store.subscribe(data => {
      // console.log('data', data);
      this.buildStudentList(data);
    })
  }

  buildStudentList(item) {
    from(item['students']['ids']).pipe(
      map(theStudentListId => {
        return {
          ...item['students']['entities'][`${theStudentListId}`],
          classes:
            // [...item['students']['entities'][`${theStudentListId}`][item['classes']['entities'][item['students']['entities'][`${theStudentListId}`]['classes']]]]
            
            [
              item['classes']['entities'][
              item['students']['entities'][`${theStudentListId}`]['classes']
              ]]
        };
      }),
      toArray()
    ).subscribe(value => {
      this.theStudents = value;
      // console.log('3333', value);
    })
  }

}
