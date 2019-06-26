import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';

/**
 * Demonstrates stateful routing parameters in the URL, by adding
 * the site, language and currency to the URL.
 *
 * Please note that the site context model will change before 1.0.
 */
@NgModule({
  imports: [
    ConfigModule.withConfig({
      siteContext: {
        urlEncodingParameters: ['BASE_SITE', 'LANGUAGE', 'CURRENCY'],
        parameters: {
          BASE_SITE: {
            values: ['electronics-spa', 'apparel-uk'],
            defaultValue: 'electronics-spa',
            persistence: 'route',
          },
        },
      },
    }),
  ],
  declarations: [],
  exports: [],
})
export class BootcampMultiSiteModule {}
