import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page.component';
import { BlankPageRoutingModule } from './blank-page-routing.module';

@NgModule({
  declarations: [BlankPageComponent],
  imports: [
    CommonModule,
    BlankPageRoutingModule
  ]
})
export class BlankPageModule { }
