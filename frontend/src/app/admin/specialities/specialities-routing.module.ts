import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialitiesComponent } from './specialities.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'add', component: AddComponent },
      { path: 'view', component: ViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialitiesRoutingModule {}
