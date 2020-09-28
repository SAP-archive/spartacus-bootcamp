import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActiveCartService, AuthService, GlobalMessageService, GlobalMessageType, MultiCartService, StateWithMultiCart } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class MyActiveCartService extends ActiveCartService {

  constructor(
    store: Store<StateWithMultiCart>,
    authService: AuthService,
    multiCartService: MultiCartService,
    private globalMessageService: GlobalMessageService
  ) {
    super(store, authService, multiCartService);
  }

  addEntry(productCode: string, quantity: number): void {
    super.addEntry(productCode, quantity);
    this.globalMessageService.add(`Adding ${productCode} to cart`, GlobalMessageType.MSG_TYPE_INFO);
  }

  updateEntry(entryNumber: number, quantity: number) {
    super.updateEntry(entryNumber, quantity);
    this.globalMessageService.add('Cart was updated', GlobalMessageType.MSG_TYPE_INFO);
  }

}
