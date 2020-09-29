import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CheckoutConfigurationModule } from './configuration/checkout.module';
import { I18nConfigurationModule } from './configuration/i18n.module';
import { LayoutConfigurationModule } from './configuration/layout.module';
import { RoutingConfigurationModule } from './configuration/routing.module';
import { OutletsModule } from './outlets/outlets.module';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://api.c39j2-walkersde1-d3-public.model-t.cc.commerce.ondemand.com',
          prefix: '/rest/v2/'
        }
      },
      context: {
        baseSite: ['electronics-spa']
      },
      // i18n: {
      //   resources: translations,
      //   chunks: translationChunksConfig
      // }
    }),
    CheckoutConfigurationModule,
    I18nConfigurationModule,
    RoutingConfigurationModule,
    LayoutConfigurationModule,
    OutletsModule,
    ComponentsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
