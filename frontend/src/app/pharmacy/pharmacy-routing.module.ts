import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PharmacyComponent } from './pharmacy.component';

const routes: Routes = [
  {
    path: '',
    component: PharmacyComponent,
    children: [
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./checkout/checkout.module').then((m) => m.CheckoutModule),
      },
      {
        path: 'pharmacy-details',
        loadChildren: () =>
          import('./pharmacy-details/pharmacy-details.module').then((m) => m.PharmacyDetailsModule),
      },
      {
        path: 'pharmacy-index',
        loadChildren: () =>
          import('./pharmacy-index/pharmacy-index.module').then((m) => m.PharmacyIndexModule),
      },
      {
        path: 'pharmacy-search',
        loadChildren: () =>
          import('./pharmacy-search/pharmacy-search.module').then((m) => m.PharmacySearchModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'product-desc',
        loadChildren: () =>
          import('./product-desc/product-desc.module').then((m) => m.ProductDescModule),
      },
      {
        path: 'success',
        loadChildren: () =>
          import('./success/success.module').then((m) => m.SuccessModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PharmacyRoutingModule { }
