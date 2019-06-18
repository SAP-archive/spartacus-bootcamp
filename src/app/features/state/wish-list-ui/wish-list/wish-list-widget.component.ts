import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product, ProductService } from '@spartacus/core';
import { ICON_TYPE } from '@spartacus/storefront';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { WishListService } from '../../wish-list-state/wish-list.service';
import { WishListWidgetService } from './wish-list-widget.service';

/**
 * Simple wish list widget component.
 *
 * 1. Display lists of products added to wish list,
 *    with proper product names and product links.
 * 2. Allows for removing product from wish list.
 * 3. Contains the button to close widget.
 */

@Component({
  selector: 'app-wish-list-widget',
  templateUrl: './wish-list-widget.component.html',
  styleUrls: ['./wish-list-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishListWidgetComponent {
  iconType = ICON_TYPE;

  /**
   * Grab observable with visibility state from WishListWidgetService
   */
  visible$ = this.wishListWidgetService.wishListVisible$;

  /**
   * Observable with product's data based on product codes in wish list
   */
  products$: Observable<Product[]> = this.wishListService.list$.pipe(
    switchMap(productCodes =>
      productCodes.length
        ? combineLatest(productCodes.map(code => this.productService.get(code)))
        : of([])
    )
  );

  constructor(
    private wishListService: WishListService,
    private productService: ProductService,
    private wishListWidgetService: WishListWidgetService
  ) {}

  /**
   * Remove product from wish list by code
   * @param code
   */
  remove(code: string) {
    this.wishListService.remove(code);
  }

  /**
   * Close wish list widget
   */
  close() {
    this.wishListWidgetService.close();
  }
}
