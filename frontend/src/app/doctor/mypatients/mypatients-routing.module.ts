import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypatientsComponent } from './mypatients.component';

const routes: Routes = [
  {
    path : '',
    component : MypatientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MypatientsRoutingModule { }
