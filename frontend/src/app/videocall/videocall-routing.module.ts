import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideocallComponent } from './videocall.component';

const routes: Routes = [
	{
		path : '',
		component : VideocallComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideocallRoutingModule { }
