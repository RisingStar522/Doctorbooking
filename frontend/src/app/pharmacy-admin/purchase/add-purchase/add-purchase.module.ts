import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPurchaseComponent } from './add-purchase.component';
import { AddPurchaseRoutingModule } from './add-purchase-routing.module';

@NgModule({
  declarations: [ AddPurchaseComponent ],
  imports: [
    CommonModule,
    AddPurchaseRoutingModule
  ]
})
export class AddPurchaseModule { }
