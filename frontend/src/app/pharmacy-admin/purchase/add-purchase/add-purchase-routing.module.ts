import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPurchaseComponent } from './add-purchase.component';

const routes: Routes = [
	{
		path : '',
		component : AddPurchaseComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPurchaseRoutingModule { }
