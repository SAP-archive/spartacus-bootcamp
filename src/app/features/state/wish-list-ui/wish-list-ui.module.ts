import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListAddToCartComponent } from './wish-list-add-to-cart/wish-list-add-to-cart.component';
import { ConfigModule, UrlModule } from '@spartacus/core';
import { AddToCartModule, IconModule } from '@spartacus/storefront';
import { WishListWidgetComponent } from './wish-list/wish-list-widget.component';
import { RouterModule } from '@angular/router';
import { WishListStateModule } from '../wish-list-state/wish-list-state.module';

@NgModule({
  declarations: [WishListAddToCartComponent, WishListWidgetComponent],
  imports: [
    CommonModule,
    AddToCartModule,
    UrlModule,
    IconModule,
    WishListStateModule,
    // Configure our custom ProductAddToCartComponent in Cms Component Mapping
    ConfigModule.withConfig({
      cmsComponents: {
        ProductAddToCartComponent: {
          component: WishListAddToCartComponent,
        },
      },
    }),
    RouterModule,
  ],
  exports: [WishListWidgetComponent],
  // You have to include your components used in Cms Mapping in entryComponents
  entryComponents: [WishListAddToCartComponent],
})
export class WishListUIModule {}
