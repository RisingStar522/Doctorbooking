import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSliderTwoComponent } from './home-slider-two.component';

const routes: Routes = [
  {
    path : '',
    component : HomeSliderTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeSliderTwoRoutingModule { }
