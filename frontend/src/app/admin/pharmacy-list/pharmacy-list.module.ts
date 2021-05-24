import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyListComponent } from './pharmacy-list.component';
import { PharmacyListRoutingModule } from './pharmacy-list-routing.module';

@NgModule({
  declarations: [ PharmacyListComponent ],
  imports: [
    CommonModule,
    PharmacyListRoutingModule
  ]
})
export class PharmacyListModule { }
