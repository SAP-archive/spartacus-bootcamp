import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, queueScheduler } from 'rxjs';
import { filter, observeOn, tap } from 'rxjs/operators';
import { AddWish, LoadWishLists, RemoveWish } from './wish-list.actions';
import { getWishes } from './wish-list.selectors';
import { StateWithWishList } from './wish-list.state';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(private store: Store<StateWithWishList>) {}

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

  add(productCode: string) {
    this.store.dispatch(new AddWish(productCode));
  }

  remove(productCode: string) {
    this.store.dispatch(new RemoveWish(productCode));
  }
}
