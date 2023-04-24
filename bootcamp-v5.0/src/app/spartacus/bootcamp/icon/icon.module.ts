import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { IconConfig, IconResourceType, ICON_TYPE } from '@spartacus/storefront';

@NgModule({
  imports: [
    ConfigModule.withConfig({
      icon: {
        symbols: {
          CART: 'shopping-bag',
        },
        resources: [
          {
            type: IconResourceType.LINK,
            url: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
          },
          {
            type: IconResourceType.SVG,
            url: './assets/icons/sprite.svg',
            types: [ICON_TYPE.CART],
          },
        ],
      },
    } as IconConfig),
  ],
})
export class BootcampIconModule {}
