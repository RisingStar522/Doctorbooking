import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSliderOneComponent } from './home-slider-one.component';

const routes: Routes = [
  {
    path : '',
    component : HomeSliderOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeSliderOneRoutingModule { }
