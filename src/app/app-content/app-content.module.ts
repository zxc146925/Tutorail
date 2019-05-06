import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContentRoutingModule } from './app-content-routing.module';
import { AppContentComponent } from './app-content/app-content.component';
import { HeaderComponent } from './app-content/header/header.component';
import { SubContentComponent } from './app-content/sub-content/sub-content.component';
import { StudentComponent } from './app-content/sub-content/student/student.component';
import { ClassComponent } from './app-content/sub-content/class/class.component';

@NgModule({
  declarations: [AppContentComponent, HeaderComponent, SubContentComponent, StudentComponent, ClassComponent],
  imports: [
    CommonModule,
    AppContentRoutingModule
  ]
})
export class AppContentModule { }
