import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContentComponent } from './app-content/app-content.component';
import { StudentComponent } from './app-content/sub-content/student/student.component';
import { ClassComponent } from './app-content/sub-content/class/class.component';

const routes: Routes = [
  { path: '', redirectTo: '/container-content/student', pathMatch: 'full' },
  {
    path: '', component: AppContentComponent, children: [
      { path: 'student', component: StudentComponent },
      { path: 'class', component: ClassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppContentRoutingModule { }
