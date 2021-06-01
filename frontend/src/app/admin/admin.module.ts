import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {SidemenuComponent} from './sidemenu/sidemenu.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {ModalModule} from 'ngx-bootstrap/modal';
import {DataService} from './../data.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {authInterceptorProviders} from '../_helpers/auth.interceptor_member';

@NgModule({
  declarations: [AdminComponent, SidemenuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    InMemoryWebApiModule.forRoot(DataService),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
})
export class AdminModule {
}
