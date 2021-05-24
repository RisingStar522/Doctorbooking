import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [HomeTwoComponent],
  imports: [
    CommonModule,
    HomeTwoRoutingModule,
    SlickCarouselModule
  ]
})

export class HomeTwoModule { }
