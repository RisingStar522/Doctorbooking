import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PharmacyListComponent } from './pharmacy-list.component';

const routes: Routes = [
	{
		path : '',
		component : PharmacyListComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyListRoutingModule { }
