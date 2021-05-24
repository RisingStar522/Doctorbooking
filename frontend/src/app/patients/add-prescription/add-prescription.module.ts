import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPrescriptionRoutingModule } from './add-prescription-routing.module';
import { AddPrescriptionComponent } from './add-prescription.component';

@NgModule({
  declarations: [ AddPrescriptionComponent ],
  imports: [
    CommonModule,
    AddPrescriptionRoutingModule
  ]
})
export class AddPrescriptionModule { }
