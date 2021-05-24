import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';

import { PatientsComponent } from './patients.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PatientsComponent, SidemenuComponent],
  imports: [CommonModule, PatientsRoutingModule, NgbModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PatientsModule {}
