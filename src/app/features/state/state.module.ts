import { NgModule } from '@angular/core';
import { NgrxEffectsModule } from './ngrx-effects/ngrx-effects.module';
import { WishListUIModule } from './wish-list-ui/wish-list-ui.module';

@NgModule({
  imports: [NgrxEffectsModule, WishListUIModule],
  exports: [WishListUIModule],
})
export class AppStateModule {}
