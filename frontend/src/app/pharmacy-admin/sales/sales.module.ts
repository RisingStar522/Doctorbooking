import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales-routing.module';


@NgModule({
  declarations: [ SalesComponent ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    DataTablesModule
  ]
})
export class SalesModule { }
