import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { BootcampStaticCmsModule } from './features/cms/static/static-cms.module';
import { BootcampComponentModule } from './features/components/component.module';
import { BootcampConfigModule } from './features/config/config.module';
import { Theme, ThemeConfig } from './features/config/theme.config';
import { BootcampI18nModule } from './features/i18n/i18n.module';
import { BootcampMultiSiteModule } from './features/multi-site/multi-site.module';
import { BootcampOutletModule } from './features/outlet/outlet.module';
import { BootcampRoutingModule } from './features/routing/routing.module';
import { BootcampSeoModule } from './features/seo/seo.module';
import { BootcampStateModule } from './features/state/state.module';
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
      site: {
        baseSite: 'electronics-spa',
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

    // demonstrate i18n
    // ConfigModule.withConfig({
    //   i18n: {
    //     resources: translations,
    //   },
    // }),
    BootcampI18nModule,

    // demonstrate outlets
    BootcampOutletModule,

    // demonstrates layout configuration
    // BootcampLayoutConfigModule,

    BootcampComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
