import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media.component';
import { SocialMediaRoutingModule } from './social-media-routing.module';

@NgModule({
  declarations: [SocialMediaComponent],
  imports: [CommonModule, SocialMediaRoutingModule],
})
export class SocialMediaModule {}
