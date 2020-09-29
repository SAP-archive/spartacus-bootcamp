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

  /**
   * Please note this will always return the same (hardcoded) product.
   *
   */
  load(productCode: string): Observable<Product> {
    return this.http
      .get(
        // tslint:disable-next-line: max-line-length
        `https://api.bestbuy.com/v1/products/6202761.json?show=sku,name,customerReviewAverage,customerReviewCount,regularPrice,salePrice,image,thumbnailImage,details,features.feature,onlineAvailability,description,longDescriptionHtml,categoryPath&apiKey=GIJ1DzoNuPuAoKjFJmqfJuDa`
      ) //tslint:disable-line
      .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
  }
}
