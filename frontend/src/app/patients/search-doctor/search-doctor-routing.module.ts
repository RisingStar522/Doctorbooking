import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDoctorComponent } from './search-doctor.component'

const routes: Routes = [
	{
		path : '',
		component : SearchDoctorComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDoctorRoutingModule { }
