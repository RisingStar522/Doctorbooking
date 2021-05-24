import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [CommonModule, FavouritesRoutingModule, TooltipModule],
})
export class FavouritesModule {}
