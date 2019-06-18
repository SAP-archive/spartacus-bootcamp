import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translations } from '@spartacus/assets';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { StaticCmsModule as AppStaticCmsModule } from './features/cms/static/static-cms.module';
import { AppConfigModule } from './features/config/config.module';
import { Theme, ThemeConfig } from './features/config/theme.config';
import { AppI18nModule } from './features/i18n/i18n.module';
import { AppMultiSiteModule } from './features/multi-site/multi-site.module';
import { AppOutletModule } from './features/outlet/outlet.module';
import { AppRoutingModule } from './features/routing/routing.module';
import { AppSeoModule } from './features/seo/seo.module';
import { AppStateModule } from './features/state/state.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
    }),
    AppRoutingModule,
    AppMultiSiteModule,
    AppSeoModule,
    AppStateModule,
    // AppDataBindingModule,

    // Demonstrate static CMS config
    AppStaticCmsModule,

    // demonstrate custom Config
    AppConfigModule,
    ConfigModule.withConfig({ theme: Theme.STRAWBERRIES } as ThemeConfig),

    // demonstrate i18n
    ConfigModule.withConfig({
      i18n: {
        resources: translations,
      },
    }),
    I18nModule,
    AppI18nModule,

    // demonstrate outlets
    AppOutletModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
