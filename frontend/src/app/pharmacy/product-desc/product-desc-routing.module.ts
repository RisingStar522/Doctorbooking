import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDescComponent } from './product-desc.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDescComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDescRoutingModule { }
