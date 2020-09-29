import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActiveCartService, ConfigModule, PRODUCT_NORMALIZER, RoutingConfig } from '@spartacus/core';
import { SearchBoxComponentService } from '@spartacus/storefront';
import { MyActiveCartService } from './my-active-cart.service';
import { MySearchBoxComponentService } from './my-search-box-component.service';
import { ProductPrettyNameNormalizer } from './product-pretty-name.normalizer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      // configure product routes
      routing: {
        routes: {
          product: {
            paths: [
              'product/:manufacturer/:firstCategoryName/:productCode/:prettyName',
              'product/:manufacturer/:productCode/:prettyName',
              'product/:productCode/:name',
              'product/:productCode',
            ],
          },
        },
      },
    } as RoutingConfig),
  ],
  providers: [
    { provide: ActiveCartService, useClass: MyActiveCartService },
    { provide: SearchBoxComponentService, useClass: MySearchBoxComponentService },
    { provide: PRODUCT_NORMALIZER, useClass: ProductPrettyNameNormalizer, multi: true }
  ]
})
export class ServicesModule { }
