import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { PurchaseComponent } from './purchase.component';
import { PurchaseRoutingModule } from './purchase-routing.module';

@NgModule({
  declarations: [ PurchaseComponent ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    DataTablesModule
  ]
})
export class PurchaseModule { }
