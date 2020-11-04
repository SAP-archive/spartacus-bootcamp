import { NgModule } from '@angular/core';
import { ConfigModule, RoutingConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      // configure product routes
      routing: {
        routes: {
          product: {
            paths: [
              'product/:manufacturer/:firstCategoryName/:productCode/:name',
              'product/:manufacturer/:productCode/:name',
              'product/:productCode/:name',
            ],
          },
        },
      },
    } as RoutingConfig),
  ],
})
export class RoutingConfigurationModule {}
