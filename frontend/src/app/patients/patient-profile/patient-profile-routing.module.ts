import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientProfileComponent } from './patient-profile.component';

const routes: Routes = [
  {
    path : '',
    component : PatientProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientProfileRoutingModule { }
