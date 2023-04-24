import { Injectable } from '@angular/core';
import { SiteContext, SiteContextConfig } from '@spartacus/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogContextService implements SiteContext<string> {

  private activeCatalog: BehaviorSubject<string>;

  constructor(private config: SiteContextConfig) {
    const defaultValue = this.getValuesFromConfig()[0] || '';
    this.activeCatalog = new BehaviorSubject<string>(defaultValue);
  }

  getActive(): Observable<string> {
    return this.activeCatalog;
  }

  getAll(): Observable<string[]> {
    return of(this.getValuesFromConfig());
  }

  setActive(catalog: string): any {
    console.log('Catalog context:', catalog);
    this.activeCatalog.next(catalog);
  }

  private getValuesFromConfig() {
    return (this.config.context && this.config.context['catalog']) || [];
  }
}
