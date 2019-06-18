import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CartService, OrderEntry, Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OutletComponent {
  private product$: Observable<
    Product
  > = this.currentProductService.getProduct().pipe(filter(Boolean));

  quantity$: Observable<number> = this.product$
    .pipe(
      switchMap((product: Product) => this.cartService.getEntry(product.code)),
      filter(Boolean)
    )
    .pipe(map((cart: OrderEntry) => cart.quantity));

  hasBrand(brand: string): Observable<boolean> {
    return this.product$.pipe(
      map(
        p =>
          !!p.categories.find(c => c.name.toLowerCase() === brand.toLowerCase())
      )
    );
  }

  constructor(
    private currentProductService: CurrentProductService,
    private cartService: CartService
  ) {}
}
