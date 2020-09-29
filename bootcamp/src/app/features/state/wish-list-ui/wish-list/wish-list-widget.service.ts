import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Service for opening anc closing wish list widget
 */

@Injectable({
  providedIn: 'root',
})
export class WishListWidgetService {
  /**
   * Observable with current visibility state of widget
   */
  wishListVisible$ = new BehaviorSubject(false);

  /**
   * Open wish list widget
   */
  open() {
    this.wishListVisible$.next(true);
  }

  /**
   * Close wish list widget
   */
  close() {
    this.wishListVisible$.next(false);
  }
}
