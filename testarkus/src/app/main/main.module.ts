import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import {MainRoutingComponent} from './main-routing.component'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MainComponent, DefaultComponent, LoginComponent],
  imports: [
    CommonModule,
    MainRoutingComponent,
    SharedModule
  ]
})
export class MainModule { }
