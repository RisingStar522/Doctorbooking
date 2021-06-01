import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {Daterangepicker} from 'ng2-daterangepicker';
import {SlickCarouselModule} from 'ngx-slick-carousel';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    Daterangepicker,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
