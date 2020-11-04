import { Component } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
})
export class OutletsComponent {
  currentProduct$: Observable<
    Product
  > = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) {}
}
