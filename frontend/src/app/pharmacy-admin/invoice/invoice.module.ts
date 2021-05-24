import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import { AdminInvoiceRoutingModule } from './invoice-routing.module';

@NgModule({
  declarations: [ InvoiceComponent ],
  imports: [
    CommonModule,
    AdminInvoiceRoutingModule
  ]
})
export class InvoiceModule { }
