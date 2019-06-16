import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { WishListService } from '../../wish-list-state/wish-list.service';
import { WishListWidgetService } from '../wish-list/wish-list-widget.service';

/**
 * Enhanced Add to Cart Component with wish list functionality
 */

@Component({
  selector: 'app-wish-list-add-to-cart',
  templateUrl: './wish-list-add-to-cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishListAddToCartComponent {
  /**
   * Observable with current product code
   */
  productCode$: Observable<
    string
  > = this.currentProductService.getProduct().pipe(
    filter(Boolean),
    map(product => product.code)
  );

  /**
   * Observable with information if current product is in wish list
   */
  isInWishList$: Observable<boolean> = combineLatest(
    this.productCode$,
    this.wishListService.list$
  ).pipe(
    map(([productCode, wishList]) => wishList.indexOf(productCode) !== -1)
  );

  constructor(
    private currentProductService: CurrentProductService,
    private wishListService: WishListService,
    private wishListWidgetService: WishListWidgetService
  ) {}

  /**
   * Add current product to wish list
   */
  addToWishList() {
    this.productCode$
      .pipe(take(1))
      .subscribe(productCode => this.wishListService.add(productCode));
    this.open();
  }

  /**
   * Open wish list widget
   */
  open() {
    this.wishListWidgetService.open();
  }
}
