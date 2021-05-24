import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './blog-details.component';
import { BlogDetailsRoutingModule } from './blog-details-routing.module';

@NgModule({
  declarations: [ BlogDetailsComponent ],
  imports: [
    CommonModule,
    FormsModule,
    BlogDetailsRoutingModule
  ]
})

export class BlogDetailsModule { }
