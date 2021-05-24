import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { OutStockComponent } from './out-stock.component';
import { OutStockRoutingModule } from './out-stock-routing.module';

@NgModule({
  declarations: [ OutStockComponent ],
  imports: [
    CommonModule,
    OutStockRoutingModule,
    DataTablesModule
  ]
})
export class OutStockModule { }
