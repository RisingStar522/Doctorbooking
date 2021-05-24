import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyIndexComponent } from './pharmacy-index.component';
import { PharmacyIndexRoutingModule } from './pharmacy-index-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [ PharmacyIndexComponent],
  imports: [
    CommonModule,
    PharmacyIndexRoutingModule,
    SlickCarouselModule
  ]
})
export class PharmacyIndexModule { }
