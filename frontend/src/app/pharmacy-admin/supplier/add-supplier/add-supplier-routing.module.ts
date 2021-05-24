import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSupplierComponent } from './add-supplier.component';

const routes: Routes = [
	{
		path : '',
		component : AddSupplierComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSupplierRoutingModule { }
