import { Injectable } from '@angular/core';
import { RoutingService, SearchboxService, TranslationService, WindowRef } from '@spartacus/core';
import { SearchBoxComponentService, SearchBoxConfig, SearchResults } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MySearchBoxComponentService extends SearchBoxComponentService {

  constructor(
    searchService: SearchboxService,
    protected routingService: RoutingService,
    translationService: TranslationService,
    winRef: WindowRef
  ) {
    super(searchService, routingService, translationService, winRef);
  }

  getResults(config: SearchBoxConfig): Observable<SearchResults> {
    return super.getResults(config).pipe(
      tap(results => {
        if (results.products?.length === 1) {
          this.routingService.go({ cxRoute: 'product', params: results.products[0] });
          super.clearResults();
        }
      })
    );
  }

}
