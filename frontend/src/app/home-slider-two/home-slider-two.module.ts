import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderTwoComponent } from './home-slider-two.component';
import { HomeSliderTwoRoutingModule } from './home-slider-two-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [ HomeSliderTwoComponent],
  imports: [
    CommonModule,
    HomeSliderTwoRoutingModule,
    SlickCarouselModule
  ]
})
export class HomeSliderTwoModule { }
