import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';

@NgModule({
  imports: [
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets//.json',
        },
        // chunks: {
        //   common: ['searchBox', 'sorting'],
        //   cart: ['cartDetails', 'cartItems'],
        // },
      },
    }),
  ],
})
export class AppI18nModule {}
