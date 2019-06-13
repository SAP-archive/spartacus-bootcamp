import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CustomEffectsEffects } from './custom-effects.effects';

describe('CustomEffectsEffects', () => {
  let actions$: Observable<any>;
  let effects: CustomEffectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomEffectsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CustomEffectsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
