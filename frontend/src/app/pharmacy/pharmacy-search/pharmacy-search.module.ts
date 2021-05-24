import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacySearchComponent } from './pharmacy-search.component';
import { PharmacySearchRoutingModule } from './pharmacy-search-routing.module';

@NgModule({
  declarations: [ PharmacySearchComponent],
  imports: [
    CommonModule,
    PharmacySearchRoutingModule
  ]
})
export class PharmacySearchModule { }
