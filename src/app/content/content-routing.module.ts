import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {path:'',redirectTo:'/content/student',pathMatch:'full'},
  {
    path:'', component: ContentComponent, children: [
      { path: 'class', loadChildren: '../content/class/class.module#ClassModule' },
      { path: 'student', loadChildren: '../content/student/student.module#StudentModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
