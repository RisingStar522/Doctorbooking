import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorFirstRoutingModule } from './error-first-routing.module';
import { ErrorFirstComponent } from './error-first.component';

@NgModule({
  declarations: [ErrorFirstComponent],
  imports: [
    CommonModule,
    ErrorFirstRoutingModule
  ]
})
export class ErrorFirstModule { }
