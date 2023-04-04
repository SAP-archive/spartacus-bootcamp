import { NgModule } from '@angular/core';
import { ProductAdapter, PRODUCT_NORMALIZER } from '@spartacus/core';
import { BestbuyProductAdapter } from './product.adapter';
import { BestbuyProductNormalizer } from './product.converter';
/**
 * https://help.sap.com/docs/SAP_COMMERCE_COMPOSABLE_STOREFRONT/eaef8c61b6d9477daf75bff9ac1b7eb4/5a1394b745374f59b98c409754fbdaf7.html?q=data-binding#component-data-binding
 */
@NgModule({
  providers: [
    {
      provide: ProductAdapter,
      useClass: BestbuyProductAdapter,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useClass: BestbuyProductNormalizer,
      multi: true,
    },
  ],
})
export class BootcampDataBindingModule {}
