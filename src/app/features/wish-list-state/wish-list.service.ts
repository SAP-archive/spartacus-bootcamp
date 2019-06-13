import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getWishes} from './wish-list.selectors';
import {StateWithWishList} from './wish-list.state';
import {Observable, queueScheduler} from 'rxjs';
import {AddWish, LoadWishLists, RemoveWish} from './wish-list.actions';
import {observeOn, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private store: Store<StateWithWishList>) { }

  list$: Observable<string[]> = this.store.pipe(
      select(getWishes),
      observeOn(queueScheduler),
      tap(wishes => {
        if (!wishes.length) {
          this.store.dispatch(new LoadWishLists());
        }
      })
    );

  add(productCode: string) {
    this.store.dispatch(new AddWish(productCode));
  }

  remove(productCode: string) {
    this.store.dispatch(new RemoveWish(productCode));
  }

}
