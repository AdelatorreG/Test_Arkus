import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminRoutingComponent } from './admin-routing.component';



@NgModule({
  declarations: [AdminComponent, AdminViewComponent],
  imports: [
    CommonModule,
    AdminRoutingComponent,
    
  ]
})
export class AdminModule { }
