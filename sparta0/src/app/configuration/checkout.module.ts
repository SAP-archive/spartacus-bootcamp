import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { CheckoutConfig } from '@spartacus/storefront';


@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      checkout: {
        guest: true,
      }
    } as CheckoutConfig)
  ]
})
export class CheckoutConfigurationModule { }
