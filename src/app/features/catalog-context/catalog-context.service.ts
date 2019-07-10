import { Injectable } from '@angular/core';
import { SiteContext } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogContextService implements SiteContext<string> {

  private activeCatalog = new BehaviorSubject<string>('');

  getActive(): Observable<string> {
    return this.activeCatalog;
  }

  getAll(): Observable<string[]> {
    return undefined;
  }

  setActive(catalog: string): any {
    this.activeCatalog.next(catalog);
  }
}
