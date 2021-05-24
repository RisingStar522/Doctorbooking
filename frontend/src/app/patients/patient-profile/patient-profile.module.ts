import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileRoutingModule } from './patient-profile-routing.module';
import { PatientProfileComponent } from './patient-profile.component';

@NgModule({
  declarations: [ PatientProfileComponent ],
  imports: [
    CommonModule,
    PatientProfileRoutingModule
  ]
})
export class PatientProfileModule { }
