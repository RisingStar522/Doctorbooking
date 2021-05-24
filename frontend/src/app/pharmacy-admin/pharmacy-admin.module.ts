import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyAdminRoutingModule } from './pharmacy-admin-routing.module';
import { PharmacyAdminComponent } from './pharmacy-admin.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api"; 
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from "../data.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PharmacyAdminComponent, SidemenuComponent],
  imports: [
    CommonModule,
    PharmacyAdminRoutingModule,
    NgbModule,
    InMemoryWebApiModule.forRoot(DataService),
    ModalModule.forRoot() 
  ]
})
export class PharmacyAdminModule { }
