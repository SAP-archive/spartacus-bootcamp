import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletsComponent } from './outlets.component';
import { OutletRefModule, ProductListModule } from '@spartacus/storefront';



@NgModule({
  declarations: [OutletsComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    ProductListModule
  ],
  exports: [OutletsComponent]
})
export class OutletsModule { }
