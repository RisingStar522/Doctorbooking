import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBillingRoutingModule } from './edit-billing-routing.module';
import { EditBillingComponent } from './edit-billing.component';

@NgModule({
  declarations: [ EditBillingComponent ],
  imports: [
    CommonModule,
    EditBillingRoutingModule
  ]
})
export class EditBillingModule { }
