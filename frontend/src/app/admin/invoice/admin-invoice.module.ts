import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInvoiceComponent } from './admin-invoice.component';
import { AdminInvoiceRoutingModule } from './admin-invoice-routing.module';

@NgModule({
  declarations: [ AdminInvoiceComponent ],
  imports: [
    CommonModule,
    AdminInvoiceRoutingModule
  ]
})
export class AdminInvoiceModule { }
