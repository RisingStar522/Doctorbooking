import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocProfileComponent } from './doc-profile.component';
import { DocProfileRoutingModule } from './doc-profile-routing.module';

@NgModule({
  declarations: [ DocProfileComponent ],
  imports: [
    CommonModule,
    DocProfileRoutingModule
  ]
})
export class DocProfileModule { }
