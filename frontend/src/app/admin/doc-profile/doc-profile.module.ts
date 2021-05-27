import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocProfileComponent } from './doc-profile.component';
import { FormsModule } from '@angular/forms';
import { DocProfileRoutingModule } from './doc-profile-routing.module';

@NgModule({
  declarations: [ DocProfileComponent ],
  imports: [
    CommonModule,
    DocProfileRoutingModule,
    FormsModule
  ]
})
export class DocProfileModule { }
