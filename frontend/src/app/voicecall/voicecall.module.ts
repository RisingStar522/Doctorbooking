import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoicecallRoutingModule } from './voicecall-routing.module';
import { VoicecallComponent } from './voicecall.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [VoicecallComponent],
  imports: [CommonModule, VoicecallRoutingModule, TooltipModule],
})
export class VoicecallModule {}
