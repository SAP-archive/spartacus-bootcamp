import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { BootcampStaticCmsModule } from './features/cms/static/static-cms.module';
import { BootcampComponentModule } from './features/components/component.module';
import { BootcampConfigModule } from './features/config/config.module';
import { Theme, ThemeConfig } from './features/config/theme.config';
import { BootcampMultiSiteModule } from './features/multi-site/multi-site.module';
import { BootcampOutletModule } from './features/outlet/outlet.module';
import { BootcampRoutingModule } from './features/routing/routing.module';
import { BootcampSeoModule } from './features/seo/seo.module';
import { BootcampStateModule } from './features/state/state.module';
import { CatalogContextModule } from './features/catalog-context/catalog-context.module';

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
      pwa: {
        enabled: false,
      },
    }),
    BootcampRoutingModule,
    BootcampMultiSiteModule,
    BootcampSeoModule,
    BootcampStateModule,
    // BootcampDataBindingModule,

    // Demonstrate static CMS config
    BootcampStaticCmsModule,

    BootcampConfigModule,
    // Provide a custom them to the `ThemeConfig`.
    ConfigModule.withConfig({ theme: Theme.STRAWBERRIES } as ThemeConfig),

    // Demonstrate outlets. Don't forget to enable the `<app-outlets></app-outlets>` in the app.component.html
    BootcampOutletModule,
    CatalogContextModule,
    // demonstrate i18n
    ConfigModule.withConfig({
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    // BootcampI18nModule,

    // demonstrates layout configuration
    // BootcampLayoutConfigModule,

    BootcampComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
