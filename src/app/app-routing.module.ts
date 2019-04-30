import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentModule } from "../app/content/content.module";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  // { path: 'student', loadChildren: '../app/student/student.module#StudentModule' },
  // { path: 'class', loadChildren: '../app/class/class.module#ClassModule' },
  { path: 'content', loadChildren: '../app/content/content.module#ContentModule' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
