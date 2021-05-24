import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyComponent } from './pharmacy.component';
import { PharmacyRoutingModule } from './pharmacy-routing.module';



@NgModule({
  declarations: [ PharmacyComponent],
  imports: [
    CommonModule,
    PharmacyRoutingModule
  ]
})
export class PharmacyModule { }
