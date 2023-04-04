import { Routes } from '@angular/router';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { StaticPageComponent } from './static-page.component';

/**
 * Demonstrates static routes and CMS based routes.
 */
export const staticRoutes: Routes = [
  {
    path: 'sale',
    component: StaticPageComponent,
    canActivate: [CmsPageGuard],
  },
  {
    path: 'demo/static/page',
    component: PageLayoutComponent,
    data: { pageLabel: '/faq' },
    canActivate: [CmsPageGuard],
  },
];
