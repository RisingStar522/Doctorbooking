import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapListRoutingModule } from './map-list-routing.module';
import { MapListComponent } from './map-list.component';


@NgModule({
  declarations: [MapListComponent],
  imports: [
    CommonModule,
    MapListRoutingModule
  ]
})
export class MapListModule { }
