import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { HeadComponent } from './head/head.component';
import { DrawerComponent } from './drawer/drawer.component';



@NgModule({
  declarations: [
    ContentComponent,
    HeadComponent,
    DrawerComponent, 
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }