import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceDetailsRoutingModule } from './invoice-details-routing.module';
import { InvoiceDetailsComponent } from './invoice-details.component';


@NgModule({
  declarations: [InvoiceDetailsComponent],
  imports: [
    CommonModule,
    InvoiceDetailsRoutingModule
  ]
})
export class InvoiceDetailsModule { }
