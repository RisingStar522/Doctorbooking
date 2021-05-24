import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddBlogComponent } from './add-blog.component';
import { AddBlogRoutingModule } from './add-blog-routing.module';

@NgModule({
  declarations: [ AddBlogComponent ],
  imports: [
    CommonModule,
    FormsModule,
    AddBlogRoutingModule
  ]
})
export class AddBlogModule { }
