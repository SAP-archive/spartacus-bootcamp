import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {WishListService} from '../../wish-list-state/wish-list.service';
import {Product, ProductService} from '@spartacus/core';
import {combineLatest, Observable, of} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {ICON_TYPE} from '@spartacus/storefront';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishListComponent {

  @Output()
  closeWishList = new EventEmitter<any>();

  iconType = ICON_TYPE;

  products$: Observable<Product[]> = this.wishListService.list$.pipe(
      switchMap(productCodes => productCodes.length ? combineLatest(productCodes.map(code => this.productService.get(code))) : of([]))
  );

  constructor(private wishListService: WishListService, private productService: ProductService) { }

  remove(code: string) {
    this.wishListService.remove(code);
  }

  close() {
    this.closeWishList.emit(true);
  }
}
