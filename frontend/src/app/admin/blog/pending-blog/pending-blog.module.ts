import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PendingBlogComponent } from './pending-blog.component';
import { PendingBlogRoutingModule } from './pending-blog-routing.module';

@NgModule({
  declarations: [ PendingBlogComponent ],
  imports: [
    CommonModule,
    FormsModule,
    PendingBlogRoutingModule
  ]
})
export class PendingBlogModule { }
