import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [DoctorComponent, SidemenuComponent],
  imports: [CommonModule, DoctorRoutingModule, ModalModule.forRoot()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DoctorModule {}
