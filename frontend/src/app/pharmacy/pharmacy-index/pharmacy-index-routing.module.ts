import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacyIndexComponent } from './pharmacy-index.component';

const routes: Routes = [
  {
    path: '',
    component: PharmacyIndexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyIndexRoutingModule { }
