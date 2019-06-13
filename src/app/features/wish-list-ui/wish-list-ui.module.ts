import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListAddToCartComponent } from './wish-list-add-to-cart/wish-list-add-to-cart.component';
import {ConfigModule, UrlModule} from '@spartacus/core';
import {AddToCartModule, IconModule} from '@spartacus/storefront';
import { WishListComponent } from './wish-list/wish-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [WishListAddToCartComponent, WishListComponent],
  imports: [
    CommonModule,
    AddToCartModule,
    UrlModule,
    IconModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductAddToCartComponent: {
          component: WishListAddToCartComponent,
        },
      },
    }),
    RouterModule
  ],
  entryComponents: [WishListAddToCartComponent]
})
export class WishListUIModule { }
