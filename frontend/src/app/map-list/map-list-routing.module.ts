import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapListComponent } from './map-list.component';

const routes: Routes = [
  {
    path: '',
    component: MapListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapListRoutingModule {}
