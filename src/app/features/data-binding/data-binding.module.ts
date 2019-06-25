import { NgModule } from '@angular/core';
import { ProductAdapter, PRODUCT_NORMALIZER } from '@spartacus/core';
import { BestbuyProductAdapter } from './product.adapter';
import { BestbuyProductNormalizer } from './product.converter';

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
