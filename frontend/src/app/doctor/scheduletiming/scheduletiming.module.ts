import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduletimingRoutingModule } from './scheduletiming-routing.module';
import { ScheduletimingComponent } from './scheduletiming.component';
import { NgSelect2Module } from 'ng-select2';

@NgModule({
  declarations: [ScheduletimingComponent],
  imports: [NgSelect2Module, CommonModule, ScheduletimingRoutingModule],
})
export class ScheduletimingModule {}
