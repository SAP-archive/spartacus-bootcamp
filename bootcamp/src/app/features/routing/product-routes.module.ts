import { NgModule } from '@angular/core';
import {
  ConfigModule,
  OccConfig,
  PRODUCT_NORMALIZER,
  RouteConfig,
  RoutingConfig,
} from '@spartacus/core';
import {
  ProductCategoryNormalizer,
  ProductPrettyNameNormalizer,
} from './product-category.normalizer';

@NgModule({
  imports: [
    ConfigModule.withConfig({
      // configure product routes
      routing: {
        routes: {
          product: {
            paths: [
              'product/:manufacturer/:firstCategoryName/:productCode/:prettyName',
              'product/:manufacturer/:productCode/:prettyName',
              'product/:productCode/:name',
            ],
          },
        },
      },
    } as RoutingConfig),

    ConfigModule.withConfig({
      paramsMapping: {
        productCode: 'code',
      },
    } as RouteConfig),

    // configure OCC product endpoint to get the manufacturer fields in the response
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            productSearch:
              // tslint:disable-next-line: max-line-length
              'products/search?fields=products(code,manufacturer,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=${query}',
          },
        },
      },
    } as OccConfig),
  ],
  providers: [
    // normalize the product data to get the first product category in the Product model
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: ProductPrettyNameNormalizer,
      multi: true,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: ProductCategoryNormalizer,
      multi: true,
    },
  ],
})
export class CustomProductRoutesModule {}
