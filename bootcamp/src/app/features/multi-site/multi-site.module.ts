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
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: [
          'electronics-spa',
          'electronics',
          'apparel-de',
          'apparel-uk',
        ],
      },
    }),
  ],
  declarations: [],
  exports: [],
})
export class BootcampMultiSiteModule {}
