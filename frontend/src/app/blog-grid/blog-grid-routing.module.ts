import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogGridComponent } from './blog-grid.component';

const routes: Routes = [
  {
    path: '',
    component: BlogGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogGridRoutingModule {}
