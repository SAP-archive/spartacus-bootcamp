import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, queueScheduler } from 'rxjs';
import { filter, observeOn, tap } from 'rxjs/operators';
import { AddWish, LoadWishLists, RemoveWish } from './wish-list.actions';
import { getWishes } from './wish-list.selectors';
import { StateWithWishList } from './wish-list.state';

/**
 * Simple facade service to simplify dealing with NgRx state/actions
 * from UI components
 */

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(private store: Store<StateWithWishList>) {}

  /**
   * Returns the current wish list from state
   * and reactively initiate wish list load
   * at first subscribe
   */
  list$: Observable<string[]> = this.store.pipe(
    select(getWishes),
    observeOn(queueScheduler),
    tap(wishes => {
      if (!wishes) {
        this.store.dispatch(new LoadWishLists());
      }
    }),
    filter(Boolean)
  );

  /**
   * Add wish to the list
   *
   * @param productCode
   */
  add(productCode: string) {
    this.store.dispatch(new AddWish(productCode));
  }

  /**
   * Remove wish from the list
   *
   * @param productCode
   */
  remove(productCode: string) {
    this.store.dispatch(new RemoveWish(productCode));
  }
}
