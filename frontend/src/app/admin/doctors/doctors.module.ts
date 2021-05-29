import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTablesModule} from 'angular-datatables';
import {DoctorsRoutingModule} from './doctors-routing.module';
import {DoctorsComponent} from './doctors.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [DoctorsComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    DataTablesModule,
    MatButtonToggleModule
  ]
})
export class DoctorsModule {
}
