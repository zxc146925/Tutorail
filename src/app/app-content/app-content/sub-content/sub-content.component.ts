import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UIActions from "../../../reducers/UI/ui.actions";
import { Router } from '@angular/router';
import { GetStudent } from 'src/app/reducers/Student/student.actions';
import { filter } from 'rxjs/operators';
import { GetClass } from 'src/app/reducers/Class/class.actions';


@Component({
  selector: 'app-sub-content',
  templateUrl: './sub-content.component.html',
  styleUrls: ['./sub-content.component.css']
})
export class SubContentComponent implements OnInit {

  btnClick;
  constructor(private _store:Store<any>,private routes:Router) { }

  ngOnInit() {
    this._store.subscribe(x =>{
      this.btnClick = x['uI']['SelectItem'];
    })
  }


  selectPage(item: string){
    this._store.dispatch(new UIActions.Selectitem(item));
    if(this.btnClick === 'student'){
      this._store.dispatch(new GetStudent());
      this._store.dispatch(new GetClass());
      
    }else if(this.btnClick === 'class'){
      this._store.dispatch(new GetClass());
    }
    this.routes.navigate(['/container-content',item]);

  }

}
