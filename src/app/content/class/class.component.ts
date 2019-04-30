import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Class } from 'src/app/reducers/Class/class.model';
import * as ClassActions from "../../reducers/Class/class.actions";
import { filter } from 'rxjs/Operators';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  theClass;
  constructor(private _store: Store<Class>) { }

  ngOnInit() {
    this._store.subscribe( data =>{
      
      this.theClass = data['classes'];
      let abc
      // console.log('y',this.theClass);
    })
  }

}
