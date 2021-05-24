import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSupplierComponent } from './add-supplier.component';
import { AddSupplierRoutingModule } from './add-supplier-routing.module';

@NgModule({
  declarations: [AddSupplierComponent],
  imports: [
    CommonModule,
    AddSupplierRoutingModule
  ]
})
export class AddSupplierModule { }
