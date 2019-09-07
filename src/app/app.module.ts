import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'spartacus-app' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl:
            'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com',
        },
      },
      context: {
        baseSite: ['electronics-spa'],
      },
    }),

    // demonstrate i18n
    ConfigModule.withConfig({
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),

    // CustomBannerModule,

    // BootcampWebComponentModule,

    // BootcampRoutingModule,

    // // Module to configure the site context with multi-site features
    // BootcampMultiSiteModule,
    // // Demonstrate a custom context
    // CatalogContextModule,

    // BootcampSeoModule,

    // BootcampStateModule,

    // BootcampDataBindingModule,

    // Demonstrate static CMS config
    // BootcampStaticCmsModule,

    // BootcampConfigModule,
    // // Provide a custom them to the `ThemeConfig`.
    // ConfigModule.withConfig({ theme: Theme.STRAWBERRIES } as ThemeConfig),

    // // Demonstrate outlets. Don't forget to enable the `<app-outlets></app-outlets>` in the app.component.html
    // BootcampOutletModule,

    // BootcampI18nModule,

    // demonstrates layout configuration
    // BootcampLayoutConfigModule,

    // BootcampComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
