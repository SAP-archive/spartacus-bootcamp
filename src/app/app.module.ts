import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translations } from '@spartacus/assets';
import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { StaticCmsModule as AppStaticCmsModule } from './features/cms/static/static-cms.module';
import { AppConfigModule } from './features/config/config.module';
import { Theme, ThemeConfig } from './features/config/theme.config';
import { AppMultiSiteModule } from './features/multi-site/multi-site.module';
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
      i18n: {
        resources: translations,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
