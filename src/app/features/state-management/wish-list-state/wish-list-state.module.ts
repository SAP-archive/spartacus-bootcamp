import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducer} from './wish-list.reducer';
import {WISH_LIST_FEATURE} from './wish-list.state';
import {EffectsModule} from '@ngrx/effects';
import {WishListEffects} from './wish-list.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(WISH_LIST_FEATURE, reducer),
    EffectsModule.forFeature([WishListEffects])
  ],
})
export class WishListStateModule { }
