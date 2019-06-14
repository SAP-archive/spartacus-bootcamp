import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translations } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { AppMultiSiteModule } from './features/multi-site/multi-site.module';
import { NgrxEffectsModule } from './features/ngrx-effects/ngrx-effects.module';
import { AppRoutingModule } from './features/routing/routing.module';
import { AppSeoModule } from './features/seo/seo.module';
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
    NgrxEffectsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
