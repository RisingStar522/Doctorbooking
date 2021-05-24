import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingBlogComponent } from './pending-blog.component';

const routes: Routes = [
	{
		path : '',
		component : PendingBlogComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingBlogRoutingModule { }
