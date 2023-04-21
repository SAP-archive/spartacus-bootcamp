import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Product } from '@spartacus/core';
import {OutletPosition} from '@spartacus/storefront';
import { OrderEntry, ActiveCartFacade } from '@spartacus/cart/base/root';
import { CurrentProductService, ProductDetailOutlets } from '@spartacus/storefront';
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
  
  outlets = ProductDetailOutlets;
  outletPosition = OutletPosition;
  private product$: Observable<Product | any> = this.currentProductService.getProduct().pipe(filter<Product | any>(Boolean));
  
  quantity$: Observable<number | any> = this.product$?.pipe(
      switchMap((product: Product) => this.cartService.getEntry(product!.code!)),
      filter(Boolean)
    )
    .pipe(map((cart: OrderEntry|any) => cart.quantity));

  hasBrand(brand: string): Observable<boolean> {
    return this.product$?.pipe(
      map(p => !!p?.categories?.find((c: { name: string; }) => c.name?.toLowerCase() === brand.toLowerCase())
      )
    );
  }

  constructor(
    private currentProductService: CurrentProductService,
    private cartService: ActiveCartFacade
  ) {}
}
