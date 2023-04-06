import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseStorefrontModule, MediaModule } from "@spartacus/storefront";
import { CustomBannerComponent } from './bootcamp/custom-banner/custom-banner.component';
import { BootcampDataBindingModule } from './bootcamp/data-binding/data-binding.module';
import { BootcampRoutingModule } from './bootcamp/routing/routing.module';
import { BootcampSeoModule } from './bootcamp/seo/seo.module';
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';

@NgModule({
  declarations: [
    //bootcamp custom banner component example
    CustomBannerComponent,
  ],
  imports: [
    SpartacusFeaturesModule,
    SpartacusConfigurationModule,
    BaseStorefrontModule, 
    CommonModule,
    // tu use <cx-media>
    MediaModule,
    // SEO for custom login page and pageMeta
    BootcampSeoModule,
    // Custom Data-binding for product
    //BootcampDataBindingModule,
    
    // Routing
    BootcampRoutingModule,

  ],
  exports: [BaseStorefrontModule]
})
export class SpartacusModule { }
