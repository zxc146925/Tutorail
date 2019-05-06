import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', redirectTo: '/container-content', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'container-content', loadChildren: '../app/app-content/app-content.module#AppContentModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
