import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypatientsRoutingModule } from './mypatients-routing.module';
import { MypatientsComponent } from './mypatients.component';


@NgModule({
  declarations: [MypatientsComponent],
  imports: [
    CommonModule,
    MypatientsRoutingModule
  ]
})
export class MypatientsModule { }
