import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  theClasses;
  constructor(private _store:Store<any>) { }

  ngOnInit() {
    this._store.subscribe(data => {
      // console.log('data', data);
      this.buildClass(data);
    })
  }

  buildClass(item) {
    from(item['classes']['ids']).pipe(
      map(theClassId => {
        return {
          ...item['classes']['entities'][`${theClassId}`]   
        };
      }),
      toArray()
    ).subscribe(value => {
      this.theClasses = value;
      // console.log('classList', value);
    })
  }
}
