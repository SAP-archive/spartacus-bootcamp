import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { WishListActionTypes, WishListActions } from './wish-list.actions';



@Injectable()
export class WishListEffects {


  @Effect()
  loadWishLists$ = this.actions$.pipe(
    ofType(WishListActionTypes.LoadWishLists),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<WishListActions>) {}

}
