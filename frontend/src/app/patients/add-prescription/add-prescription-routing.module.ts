import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPrescriptionComponent } from './add-prescription.component';

const routes: Routes = [
	{
		path : '',
		component : AddPrescriptionComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPrescriptionRoutingModule { }
