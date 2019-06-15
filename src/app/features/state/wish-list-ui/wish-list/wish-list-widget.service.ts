import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishListWidgetService {
  wishListVisible$ = new BehaviorSubject(false);

  open() {
    this.wishListVisible$.next(true);
  }

  close() {
    this.wishListVisible$.next(false);
  }
}
