import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { map, toArray } from 'rxjs/Operators';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  storeName;
  studentList;
  theClass;
  constructor(private _store: Store<string>) {
    this._store.subscribe(value => {
      this.storeName = value['UI']['selcetedList'];
      this.theClass = value['classes'];
      this.buildStudentList(value);

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
  
  ngOnInit() {

  }

}
