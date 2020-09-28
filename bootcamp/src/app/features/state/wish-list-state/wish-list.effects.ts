import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { WindowRef } from '@spartacus/core';
import { map, tap } from 'rxjs/operators';
import {
  LoadWishListsSuccess,
  WishListActions,
  WishListActionTypes,
} from './wish-list.actions';
import { WishListDataService } from './wish-list-data.service';

@Injectable()
export class WishListEffects {
  @Effect()
  loadWishLists$ = this.actions$.pipe(
    ofType(WishListActionTypes.LoadWishLists),
    map(x => {
      const wishList = this.wishListData.getWishList();
      return new LoadWishListsSuccess(wishList);
    })
  );

  @Effect({ dispatch: false })
  addWish$ = this.actions$.pipe(
    ofType(WishListActionTypes.AddWish),
    tap(action => {
      this.wishListData.addToWishList(action.payload);
    })
  );

  @Effect({ dispatch: false })
  removeWish$ = this.actions$.pipe(
    ofType(WishListActionTypes.RemoveWish),
    tap(action => {
      this.wishListData.removeFromWishList(action.payload);
    })
  );

  constructor(
    private actions$: Actions<WishListActions>,
    private wishListData: WishListDataService
  ) {}
}
