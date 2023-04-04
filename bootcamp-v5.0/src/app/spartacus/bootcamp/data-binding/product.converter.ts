import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable()
export class BestbuyProductNormalizer
  implements Converter<Occ.Product, Product> {
  convert(source: any, target?: any): Product {
    // target.code = source.sku;
    target.name = source.name;
    target.averageRating = source.customerReviewAverage;
    target.numberOfReviews = source.customerReviewCount;
    target.description = source.longDescriptionHtml;
    target.summary = source.shortDescription;
    target.price = {
      formattedValue: source.salePrice + '$',
      value: source.salePrice,
    };

    target.stock = source.onlineAvailability
      ? { stockLevel: 100, stockLevelStatus: 'good' }
      : {};

    target.categories = this.convertCategories(source);
    target.images = this.convertImages(source);
    target.classifications = this.convertFeatures(source);
    return target;
  }

  private convertCategories(source: any) {
    return source.categoryPath.map((c: { name: any; id: any; }) => {
      return { name: c.name, code: c.id };
    });
  }

  private convertImages(source: any) {
    return {
      PRIMARY: {
        zoom: {
          url: source.image,
        },
        thumbnail: {
          url: source.thumbnailImage,
          format: 'thumbnail',
        },
      },
    };
  }
  
  private convertFeatures(source: any) {
    return [
      {
        name: 'Technical features',
        features: [
          {
            name: 'Feature',
            featureValues: source.features.map((f: { feature: any; }) => {
              return { value: f.feature };
            }),
          },
        ],
      },
      {
        name: 'Details',
        features: source.details.map((detail: { name: any; values: any[]; }) => {
          return {
            name: detail.name,
            featureValues: detail.values.map((value: any) => {
              return {
                value,
              };
            }),
          };
        }),
      },
    ];
  }
}
