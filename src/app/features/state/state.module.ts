import { NgModule } from '@angular/core';
import { NgrxEffectsModule } from './ngrx-effects/ngrx-effects.module';
import { WishListStateModule } from './wish-list-state/wish-list-state.module';
import { WishListUIModule } from './wish-list-ui/wish-list-ui.module';

@NgModule({
  imports: [WishListStateModule, WishListUIModule, NgrxEffectsModule],
  exports: [WishListUIModule],
})
export class AppStateModule {}
