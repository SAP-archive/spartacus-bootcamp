import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';

/**
 * Simple wish list data service that stores wish list in localStorage,
 * In real life scenarios you probably will want to use full-blown backend solution,
 * and store wish lists on per user basis.
 */

const WISH_LIST_KEY = 'wish-list-data';

@Injectable({
  providedIn: 'root',
})
export class WishListDataService {
  constructor(private winRef: WindowRef) {}

  getWishList(): string[] {
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

  setWishList(wishes: string[]) {
    if (this.winRef.localStorage) {
      this.winRef.localStorage.setItem(WISH_LIST_KEY, JSON.stringify(wishes));
    }
  }

  addToWishList(wish: string) {
    const wishList = this.getWishList();
    if (wishList.indexOf(wish) === -1) {
      wishList.push(wish);
      this.setWishList(wishList);
    }
  }

  removeFromWishList(wishToRemove: string) {
    this.setWishList(this.getWishList().filter(wish => wish !== wishToRemove));
  }
}
