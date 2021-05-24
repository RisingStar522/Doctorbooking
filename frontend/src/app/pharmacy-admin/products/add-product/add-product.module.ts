import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { AddProductRoutingModule } from './add-product-routing.module';

@NgModule({
  declarations: [ AddProductComponent],
  imports: [
    CommonModule,
    AddProductRoutingModule
  ]
})
export class AddProductModule { }
