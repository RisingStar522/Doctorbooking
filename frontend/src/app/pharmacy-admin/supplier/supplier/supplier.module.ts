import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';

@NgModule({
  declarations: [ SupplierComponent ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    DataTablesModule
  ]
})
export class SupplierModule { }
