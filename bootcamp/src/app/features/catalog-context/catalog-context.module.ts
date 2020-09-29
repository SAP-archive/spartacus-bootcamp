import { NgModule } from '@angular/core';
import {
  ConfigModule,
  ContextServiceMap,
  serviceMapFactory,
  SiteContextConfig,
} from '@spartacus/core';
import { CatalogContextService } from './catalog-context.service';

function customServiceMapFactory() {
  return {
    ...serviceMapFactory(),
    catalog: CatalogContextService,
  };
}

/**
 * Introduces a custom context to demonstrate that the SiteContext is
 * extendible to any context so that a statefull URL can be used to (re)build
 * the experience. Just note that there's no real implementation behind the
 * custom context, as this is not the point to demonstrate here.
 */
@NgModule({
  imports: [
    ConfigModule.withConfig({
      context: {
        urlParameters: ['baseSite', 'catalog', 'language', 'currency'],
        catalog: ['catalog-A', 'catalog-B'],
      },
    } as SiteContextConfig),
  ],
  providers: [
    {
      provide: ContextServiceMap,
      useFactory: customServiceMapFactory,
    },
  ],
  declarations: [],
  exports: [],
})
export class CatalogContextModule {}
