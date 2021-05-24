import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBillingComponent } from './add-billing.component';

const routes: Routes = [
	{
		path : '',
		component : AddBillingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBillingRoutingModule { }
