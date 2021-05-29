import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocProfileComponent} from './doc-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DocProfileRoutingModule} from './doc-profile-routing.module';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [DocProfileComponent],
  imports: [
    CommonModule,
    DocProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class DocProfileModule {
}
