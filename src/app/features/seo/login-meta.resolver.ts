import { Injectable } from '@angular/core';
import { ContentPageMetaResolver, Page } from '@spartacus/core';
import { Observable, of } from 'rxjs';

/**
 * Demonstrates page meta resolver for the login page.
 * In this example we add a page resolver, and connect the
 * page resolver to the pageTemplate.
 */
@Injectable({
  providedIn: 'root',
})
export class LoginPageMetaResolver extends ContentPageMetaResolver {
  pageTemplate = 'LoginPageTemplate';

  resolveTitle(page: Page): Observable<string> {
    return of('Custom Login Page title');
  }
}
