import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDescComponent } from './product-desc.component';
import { ProductDescRoutingModule } from './product-desc-routing.module';

@NgModule({
  declarations: [ ProductDescComponent ],
  imports: [
    CommonModule,
    ProductDescRoutingModule
  ]
})
export class ProductDescModule { }
