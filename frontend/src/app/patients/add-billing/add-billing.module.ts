import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBillingRoutingModule } from './add-billing-routing.module';
import { AddBillingComponent } from './add-billing.component';

@NgModule({
  declarations: [AddBillingComponent],
  imports: [
    CommonModule,
    AddBillingRoutingModule
  ]
})
export class AddBillingModule { }
