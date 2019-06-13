import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ADD_ENTRY_SUCCESS, AddEntrySuccess, AddMessage, GlobalMessageType, LOAD_PRODUCT_SUCCESS, LoadProductSuccess} from '@spartacus/core';


@Injectable()
export class CustomEffectsEffects {

    @Effect({dispatch: false})
    logProductLoading$: Observable<any> = this.actions$.pipe(
        ofType(LOAD_PRODUCT_SUCCESS),
        map((action: LoadProductSuccess) => action.payload.code),
        tap(code => console.log('product loaded', code)));

    @Effect()
    addToCartNotify$: Observable<any> = this.actions$.pipe(
        ofType(ADD_ENTRY_SUCCESS),
        map((action: AddEntrySuccess) => action.payload.entry.product),
        map(product => new AddMessage(
            {
                text: {raw: product.name + ' added to cart'},
                type: GlobalMessageType.MSG_TYPE_CONFIRMATION
            }
        ))
    );

    constructor(private actions$: Actions) {
    }

}
