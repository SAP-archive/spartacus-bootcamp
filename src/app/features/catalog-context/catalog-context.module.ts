import { NgModule } from '@angular/core';
import { ConfigModule, ContextServiceMap, serviceMapFactory } from '@spartacus/core';
import { CatalogContextService } from './catalog-context.service';

function customServiceMapFactory() {
  return {
    ...serviceMapFactory(),
    catalog: CatalogContextService
  };
}

@NgModule({
  imports: [
    ConfigModule.withConfig({
      context: {
        urlParameters: ['baseSite', 'language', 'currency', 'catalog'],
        catalog: ['first', 'second'],
      },
    }),
  ],
  providers: [
    {
      provide: ContextServiceMap,
      useFactory: customServiceMapFactory
    }
  ],
  declarations: [],
  exports: [],
})
export class CatalogContextModule { }
