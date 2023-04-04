import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryNormalizer implements Converter<Occ.Product, Product> {
  convert(source: Occ.Product, target?: any): Product {
    if (source.categories && source.categories.length) {
      target.firstCategoryName = source.categories[0]?.name?.replace(/ /g, '-');
    }
    return target;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ProductPrettyNameNormalizer implements Converter<Occ.Product, Product> {
  convert(source: Occ.Product, target?: any): Product {
    target.prettyName = source.name?.replace(/ /g, '-');
    return target;
  }
}
