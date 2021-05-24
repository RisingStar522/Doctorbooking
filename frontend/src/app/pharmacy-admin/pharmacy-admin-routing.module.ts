import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacyAdminComponent } from './pharmacy-admin.component';

const routes: Routes = [
  {
    path: '',
    component: PharmacyAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      }, 
      {
        path: 'categories',
        loadChildren: () =>
          import('./categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      }, 
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },       
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'add-product',
        loadChildren: () =>
          import('./products/add-product/add-product.module').then(
            (m) => m.AddProductModule
          ),
      },
      {
        path: 'edit-product',
        loadChildren: () =>
          import('./products/add-product/add-product.module').then(
            (m) => m.AddProductModule
          ),
      },  
      {
        path: 'expired',
        loadChildren: () =>
          import('./products/expired/expired.module').then(
            (m) => m.ExpiredModule
          ),
      },  
      {
        path: 'out-stock',
        loadChildren: () =>
          import('./products/out-stock/out-stock.module').then(
            (m) => m.OutStockModule
          ),
      },
      {
        path: 'purchase',
        loadChildren: () =>
          import('./purchase/purchase/purchase.module').then(
            (m) => m.PurchaseModule
          ),
      },
      {
        path: 'add-purchase',
        loadChildren: () =>
          import('./purchase/add-purchase/add-purchase.module').then(
            (m) => m.AddPurchaseModule
          ),
      },
      {
        path: 'edit-purchase',
        loadChildren: () =>
          import('./purchase/add-purchase/add-purchase.module').then(
            (m) => m.AddPurchaseModule
          ),
      },  
      {
        path: 'orders',
        loadChildren: () =>
          import('./purchase/order/order.module').then(
            (m) => m.OrderModule
          ),
      }, 
      {
        path: 'transactions',
        loadChildren: () =>
          import('./transactions/transactions.module').then(
            (m) => m.TransactionsModule
          ),
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('./sales/sales.module').then(
            (m) => m.SalesModule
          ),
      },
      {
        path: 'supplier',
        loadChildren: () =>
          import('./supplier/supplier/supplier.module').then((m) => m.SupplierModule),
      },
      {
        path: 'add-supplier',
        loadChildren: () =>
          import('./supplier/add-supplier/add-supplier.module').then(
            (m) => m.AddSupplierModule
          ),
      },  
      {
        path: 'invoice',
        loadChildren: () =>
          import('./invoice/invoice.module').then(
            (m) => m.InvoiceModule
          ),
      },
      {
        path: 'invoice-reports',
        loadChildren: () =>
          import('./invoice-reports/invoice-reports.module').then(
            (m) => m.InvoiceReportsModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyAdminRoutingModule {}
