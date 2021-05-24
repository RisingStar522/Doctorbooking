import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideocallRoutingModule } from './videocall-routing.module';
import { VideocallComponent } from './videocall.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [VideocallComponent],
  imports: [CommonModule, VideocallRoutingModule, TooltipModule],
})
export class VideocallModule {}
