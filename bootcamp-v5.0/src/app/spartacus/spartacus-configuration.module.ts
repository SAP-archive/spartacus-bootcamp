import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { CmsConfig, FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, MediaComponent, mediaConfig, MediaModule, StorefrontComponentModule } from "@spartacus/storefront";
import { CustomBannerComponent } from './bootcamp/component/custom-banner/custom-banner.component';

  @NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    // MediaModule,
    // StorefrontComponentModule,
  ],
  providers: [ 
    provideConfig(layoutConfig), 
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders, 
    provideConfig(<OccConfig>{
    backend: {
      occ: {
        // baseUrl: 'https://localhost:9002',
        baseUrl: 'https://spartacus-devci767.eastus.cloudapp.azure.com:8443',
        // baseUrl:'https://spartacus-dev7.eastus.cloudapp.azure.com:9002/',
        prefix: '/occ/v2/' ,
      },
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      urlParameters: ['baseSite', 'language', 'currency'],
      baseSite: ['electronics-spa','apparel-uk-spa'],
      currency: ['USD', 'GBP',]
      },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '5.0'
    }
  }),
  provideConfig(<CmsConfig>{
    cmsComponents: {
      SimpleResponsiveBannerComponent: {
          component : CustomBannerComponent,
        },
      },
    }),
  ], 
  entryComponents: [CustomBannerComponent],
})
export class SpartacusConfigurationModule { }