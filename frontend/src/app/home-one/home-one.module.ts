import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOneComponent } from './home-one.component';
import { HomeOneRoutingModule } from './home-one-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [ HomeOneComponent ],
  imports: [
    CommonModule,
    HomeOneRoutingModule,
    SlickCarouselModule
  ]
})
export class HomeOneModule { }
