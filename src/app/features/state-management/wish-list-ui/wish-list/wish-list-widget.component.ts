import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {WishListService} from '../../wish-list-state/wish-list.service';
import {Product, ProductService} from '@spartacus/core';
import {combineLatest, Observable, of} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {ICON_TYPE} from '@spartacus/storefront';
import {WishListWidgetService} from './wish-list-widget.service';

@Component({
  selector: 'app-wish-list-widget',
  templateUrl: './wish-list-widget.component.html',
  styleUrls: ['./wish-list-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishListWidgetComponent {

  iconType = ICON_TYPE;

  visible$ = this.wishListWidgetService.wishListVisible$;

  products$: Observable<Product[]> = this.wishListService.list$.pipe(
      switchMap(productCodes => productCodes.length ? combineLatest(productCodes.map(code => this.productService.get(code))) : of([]))
  );

  constructor(private wishListService: WishListService, private productService: ProductService, private wishListWidgetService: WishListWidgetService) { }

  remove(code: string) {
    this.wishListService.remove(code);
  }

  close() {
    this.wishListWidgetService.close();
  }
}
