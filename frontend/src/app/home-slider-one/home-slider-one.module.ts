import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderOneComponent } from './home-slider-one.component';
import { HomeSliderOneRoutingModule } from './home-slider-one-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [HomeSliderOneComponent],
  imports: [
    CommonModule,
    HomeSliderOneRoutingModule,
    SlickCarouselModule
  ]
})
export class HomeSliderOneModule { }
