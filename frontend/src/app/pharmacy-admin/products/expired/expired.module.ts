import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ExpiredComponent } from './expired.component';
import { ExpiredRoutingModule } from './expired-routing.module';

@NgModule({
  declarations: [ExpiredComponent],
  imports: [
    CommonModule,
    ExpiredRoutingModule,
    DataTablesModule
  ]
})
export class ExpiredModule { }
