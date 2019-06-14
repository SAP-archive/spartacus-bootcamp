import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AddEntrySuccess,
  AddMessage,
  ADD_ENTRY_SUCCESS,
  GlobalMessageType,
  LoadProductSuccess,
  LOAD_PRODUCT_SUCCESS,
  Product,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomEffectsEffects {
  @Effect({ dispatch: false })
  logProductLoading$: Observable<any> = this.actions$.pipe(
    ofType(LOAD_PRODUCT_SUCCESS),
    map((action: LoadProductSuccess) => action.payload.code)
  );

  @Effect()
  addToCartNotify$: Observable<any> = this.actions$.pipe(
    ofType(ADD_ENTRY_SUCCESS),
    map((action: AddEntrySuccess) => action.payload.entry.product),
    map(
      (product: Product) =>
        new AddMessage({
          text: { raw: product.name + ' added to cart' },
          type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
        })
    )
  );

  constructor(private actions$: Actions) {}
}
