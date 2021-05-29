import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from '../../../_helpers/auth.interceptor';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
})
export class LoginModule {
}
