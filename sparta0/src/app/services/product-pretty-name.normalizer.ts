import { Injectable } from "@angular/core";
import { Product, Converter, Occ } from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class ProductPrettyNameNormalizer
  implements Converter<Occ.Product, Product> {
  convert(source: Occ.Product, target?: any): Product {
    if (source.name) {
      target.prettyName = source.name.replace(/ /g, '-').toLocaleLowerCase();
    }
    return target;
  }
}
