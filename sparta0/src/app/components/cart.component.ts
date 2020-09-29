import { Component } from '@angular/core';
import { CartDetailsComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends CartDetailsComponent {

  onChange(entryNumber, event) {
    this.activeCartService.updateEntry(entryNumber, event.target.value);
  }

}
