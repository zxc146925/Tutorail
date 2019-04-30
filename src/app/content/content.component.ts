import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadClasss } from '../reducers/Class/class.actions';
import { LoadStudents } from '../reducers/Student/student.actions';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  STUDENTS = [
    { id: "s1", name: '小名', no: "1231", class: "c2" },
    { id: "s2", name: '小鐘', no: "ras", class: "c1" },
    { id: "s3", name: '小知', no: "123", class: "c5" },
    { id: "s4", name: '小障', no: "rr2ws", class: "c2" },
    { id: "s5", name: '小間', no: "123131", class: "c3" },
  ];
  CLASS = [
    { id: "c1", name: "歷史", no: "c10" },
    { id: "c2", name: "數學", no: "c11" },
    { id: "c3", name: "國文", no: "c12" },
    { id: "c4", name: "英文", no: "c13" },
    { id: "c5", name: "化學", no: "c14" },
  ];


  constructor(private store: Store<any>) {
    this.store.dispatch(new LoadStudents({ students: this.STUDENTS }));
    this.store.dispatch(new LoadClasss({ classs: this.CLASS }));
  }

  ngOnInit() {
    
  }

}
