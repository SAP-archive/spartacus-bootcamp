import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { MediaModule } from '@spartacus/storefront';
import { CustomBannerComponent } from './banner.component';

@NgModule({
  declarations: [CustomBannerComponent],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [CustomBannerComponent],
})
export class ComponentsModule {}
