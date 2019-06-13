import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translations } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { AppMultiSiteModule } from './features/multi-site/multi-site.module';
import { AppRoutingModule } from './features/routing/routing.module';
import {WishListStateModule} from './features/wish-list-state/wish-list-state.module';
import {WishListUIModule} from './features/wish-list-ui/wish-list-ui.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com'
        }
      },
      site: {
        baseSite: 'electronics-spa'
      },
      i18n: {
        resources: translations
      }
    }),
    AppRoutingModule,
    AppMultiSiteModule,
    WishListStateModule,
    WishListUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
