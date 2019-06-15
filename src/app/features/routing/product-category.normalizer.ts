import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable()
export class ProductCategoryNormalizer
  implements Converter<Occ.Product, Product> {
  convert(source: Occ.Product, target?: any): Product {
    if (source.categories && source.categories.length) {
      target.category = source.categories[0].name;
    }

    return target;
  }
}
