import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStorefrontModule, MediaModule } from '@spartacus/storefront';
import { SpartacusConfigurationModule } from '../../spartacus-configuration.module';
import { SpartacusFeaturesModule } from '../../spartacus-features.module';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { provideConfig, CmsConfig } from '@spartacus/core';



@NgModule({
  declarations: [
      //bootcamp custom banner component example
      CustomBannerComponent,
  ],
  imports: [
    CommonModule,
    SpartacusFeaturesModule,
    SpartacusConfigurationModule,
    BaseStorefrontModule, 
    /* tu use <cx-media> in the custom banner html */
    MediaModule,
  ],
  providers:[
  // provide our CustomBannerComponent as a SimpleResponsiveBannerComponent
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
export class BootcampComponentModule { }
