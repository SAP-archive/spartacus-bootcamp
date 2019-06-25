import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';

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
