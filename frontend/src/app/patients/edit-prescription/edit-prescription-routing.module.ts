import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPrescriptionComponent } from './edit-prescription.component';

const routes: Routes = [
	{
		path : '',
		component : EditPrescriptionComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPrescriptionRoutingModule { }
