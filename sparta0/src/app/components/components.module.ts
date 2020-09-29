import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ConfigModule, CmsConfig, UrlModule, FeaturesConfigModule, I18nModule } from '@spartacus/core';
import { CartSharedModule, CartCouponModule, PromotionsModule, MediaModule, SpinnerModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CartComponent],
  imports: [

    CartSharedModule,
    CommonModule,
    CartCouponModule,
    RouterModule,
    MediaModule,
    UrlModule,
    PromotionsModule,
    FeaturesConfigModule,
    I18nModule,
    FormsModule,
    SpinnerModule,

    ConfigModule.withConfig({
      cmsComponents: {
        CartComponent: {
          component: CartComponent,
        },
      }
    } as CmsConfig)
  ],
  entryComponents: [CartComponent]
})
export class ComponentsModule { }
