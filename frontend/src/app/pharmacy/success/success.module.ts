import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';
import { SuccessRoutingModule } from './success-routing.module';

@NgModule({
  declarations: [ SuccessComponent ],
  imports: [
    CommonModule,
    SuccessRoutingModule
  ]
})
export class SuccessModule { }
