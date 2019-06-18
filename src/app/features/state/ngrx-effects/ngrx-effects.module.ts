import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CustomEffectsEffects } from './custom-effects.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Use EffectsModule.forFeature() to register your custom effects
    EffectsModule.forFeature([CustomEffectsEffects]),
  ],
})
export class NgrxEffectsModule {}
