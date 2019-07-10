import { Injectable } from '@angular/core';
import { SiteContext } from '@spartacus/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogContextService implements SiteContext<string> {

  private activeCatalog = new BehaviorSubject<string>('');

  getActive(): Observable<string> {
    return this.activeCatalog;
  }

  getAll(): Observable<string[]> {
    return of(['first', 'second']);
  }

  setActive(catalog: string): any {
    this.activeCatalog.next(catalog);
  }
}
