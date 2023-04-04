import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ConverterService,
  Product,
  ProductAdapter,
  PRODUCT_NORMALIZER,
} from '@spartacus/core';
import { Observable } from 'rxjs';

@Injectable()
export class BestbuyProductAdapter implements ProductAdapter {
  constructor(
    protected http: HttpClient,
    protected converter: ConverterService
  ) {}

  
   //This will always return the same (hardcoded) product.
  load(productCode: string): Observable<Product> {
    return this.http
      .get(
        // tslint:disable-next-line: max-line-length
        'INSERT API KEY HERE'
      ) //tslint:disable-line
      .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
  }
}
