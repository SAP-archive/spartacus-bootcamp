import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { WindowRef } from '@spartacus/core';
import { map, tap } from 'rxjs/operators';
import {
  LoadWishListsSuccess,
  WishListActions,
  WishListActionTypes,
} from './wish-list.actions';

const WISH_LIST_KEY = 'wish-list-data';

@Injectable()
export class WishListEffects {
  @Effect()
  loadWishLists$ = this.actions$.pipe(
    ofType(WishListActionTypes.LoadWishLists),
    map(x => {
      const wishlist = this.getWishList();
      return new LoadWishListsSuccess(wishlist);
    })
  );

  @Effect({ dispatch: false })
  addWish$ = this.actions$.pipe(
    ofType(WishListActionTypes.AddWish),
    tap(action => {
      this.addToWishList(action.payload);
    })
  );

  @Effect({ dispatch: false })
  removeWish$ = this.actions$.pipe(
    ofType(WishListActionTypes.RemoveWish),
    tap(action => {
      this.removeFromWishList(action.payload);
    })
  );

  /**
   * Below you'll find helper functions to load and store wish list in localStorage
   * In real implementation you would probably want to store wish list on a backend
   * per user basis.
   */

  private getWishList(): string[] {
    if (this.winRef.localStorage) {
      const data = this.winRef.localStorage.getItem(WISH_LIST_KEY);
      if (data) {
        try {
          return JSON.parse(data);
        } catch (e) {}
      }
    }
    return [];
  }

  private setWishList(wishes: string[]) {
    if (this.winRef.localStorage) {
      this.winRef.localStorage.setItem(WISH_LIST_KEY, JSON.stringify(wishes));
    }
  }

  private addToWishList(wish: string) {
    const wishList = this.getWishList();
    if (wishList.indexOf(wish) === -1) {
      wishList.push(wish);
      this.setWishList(wishList);
    }
  }

  private removeFromWishList(wishToRemove: string) {
    this.setWishList(this.getWishList().filter(wish => wish !== wishToRemove));
  }

  constructor(
    private actions$: Actions<WishListActions>,
    private winRef: WindowRef
  ) {}
}
