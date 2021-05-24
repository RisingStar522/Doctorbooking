import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { ChangePasswordRoutingModule } from './change-password-routing.module';

@NgModule({
  declarations: [ ChangePasswordComponent ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule
  ]
})
export class ChangePasswordModule { }
