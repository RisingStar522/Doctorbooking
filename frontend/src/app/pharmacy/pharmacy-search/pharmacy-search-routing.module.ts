import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacySearchComponent } from './pharmacy-search.component';

const routes: Routes = [
  {
    path: '',
    component: PharmacySearchComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacySearchRoutingModule { }
