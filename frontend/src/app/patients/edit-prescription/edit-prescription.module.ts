import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPrescriptionComponent } from './edit-prescription.component';
import { EditPrescriptionRoutingModule } from './edit-prescription-routing.module';

@NgModule({
  declarations: [ EditPrescriptionComponent],
  imports: [
    CommonModule,
    EditPrescriptionRoutingModule
  ]
})
export class EditPrescriptionModule { }
