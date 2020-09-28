import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

@NgModule({
  imports: [
    ConfigModule.withConfig({
      layoutSlots: {
        LandingPage2Template: null,
      },
    } as LayoutConfig),

    ConfigModule.withConfig({
      layoutSlots: {
        LandingPage2Template: {
          slots: ['Section5', 'Section3', 'Section2A', 'Section2B', 'Section1'],
        },
      },
    } as LayoutConfig),
  ],
})
export class BootcampLayoutConfigModule {}
