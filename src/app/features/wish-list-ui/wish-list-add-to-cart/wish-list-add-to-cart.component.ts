import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {CurrentProductService} from '@spartacus/storefront';
import {WishListService} from '../../wish-list-state/wish-list.service';
import {filter, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-wish-list-add-to-cart',
  templateUrl: './wish-list-add-to-cart.component.html',
  styleUrls: ['./wish-list-add-to-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishListAddToCartComponent {

  wishListVisible$ = new BehaviorSubject(false);

  productCode$: Observable<string> = this.currentProductService.getProduct().pipe(
      filter(Boolean),
      map(product => product.code)
  );

  isInWishList$: Observable<boolean> = combineLatest(this.productCode$, this.wishListService.list$).pipe(
    map(([productCode, wishList]) => wishList.indexOf(productCode) !== -1 )
  );

  constructor(private currentProductService: CurrentProductService, private wishListService: WishListService) { }

  addToWishList() {
    this.productCode$.pipe(take(1)).subscribe(
        productCode => this.wishListService.add(productCode)
    );
    this.open();
  }

  removeFromWishList() {
    this.productCode$.pipe(take(1)).subscribe(
        productCode => this.wishListService.remove(productCode)
    );
  }

  open() {
    this.wishListVisible$.next(true);
  }

  onClose() {
    this.wishListVisible$.next(false);
  }
}
