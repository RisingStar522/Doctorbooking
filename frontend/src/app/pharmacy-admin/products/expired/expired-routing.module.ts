import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpiredComponent } from './expired.component';

const routes: Routes = [
	{
		path : '',
		component : ExpiredComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpiredRoutingModule { }
