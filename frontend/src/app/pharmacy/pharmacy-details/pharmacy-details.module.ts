import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyDetailsComponent } from './pharmacy-details.component';
import { PharmacyDetailsRoutingModule } from './pharmacy-details-routing.module';

@NgModule({
  declarations: [ PharmacyDetailsComponent ],
  imports: [
    CommonModule,
    PharmacyDetailsRoutingModule
  ]
})
export class PharmacyDetailsModule { }
