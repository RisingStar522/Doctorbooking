import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SocialMediaComponent} from './social-media.component';

const routes: Routes = [
  {
    path: '',
    component: SocialMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule {
}
