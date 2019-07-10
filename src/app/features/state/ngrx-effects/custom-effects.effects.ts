import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  CartActions,
  GlobalMessageActions,
  GlobalMessageType,
  Product,
  ProductActions,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class CustomEffectsEffects {
  @Effect({ dispatch: false }) // Use `{ dispatch: false }` for effects that don't emit any action
  logProductLoading$: Observable<any> = this.actions$.pipe(
    ofType(ProductActions.LOAD_PRODUCT_SUCCESS), // listen for successful product load
    map((action: ProductActions.LoadProductSuccess) => action.payload.code), // extract product code from action payload
    tap(code => console.log('product loaded', code)) // do something useful with product code
  );

  @Effect()
  addToCartNotify$: Observable<any> = this.actions$.pipe(
    ofType(CartActions.CART_ADD_ENTRY_SUCCESS), // listen for successful add to cart
    map(
      (action: CartActions.CartAddEntrySuccess) => action.payload.entry.product
    ), // get product from action payload
    map(
      (product: Product) =>
        // return/emit action that will add custom global message
        new GlobalMessageActions.AddMessage({
          text: { raw: product.name + ' added to cart' },
          type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
        })
    )
  );

  constructor(private actions$: Actions) {}
}
