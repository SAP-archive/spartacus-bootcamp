import { NgModule } from '@angular/core';
import { ConfigModule, OccConfig, RoutingConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'cameras/:productCode/:manufacturer/:name',
              'cameras/:productCode/:name',
              'cameras/:productCode/',
            ]
          }
        }
      }
    } as RoutingConfig),



    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            productSearch:
              // tslint:disable-next-line: max-line-length
              'products/search?fields=products(code,manufacturer,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery',
          },
        },
      },
    } as OccConfig),
  ]
})
export class RoutingConfigurationModule { }
