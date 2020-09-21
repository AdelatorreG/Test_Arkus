import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import {MainRoutingComponent} from './main-routing.component'
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MainComponent, DefaultComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    MainRoutingComponent,
    SharedModule,
    HttpClientModule
  ]
})
export class MainModule { }
