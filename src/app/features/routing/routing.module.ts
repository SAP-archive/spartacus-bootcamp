import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { CmsPageGuard, OutletRefModule } from '@spartacus/storefront';
import { CustomProductRoutesModule } from './product-routes.module';
import { AppStaticPageComponent as AppStaticSalePageComponent } from './static-page.component';

const routes: Routes = [
  {
    path: 'sale',
    component: AppStaticSalePageComponent,
    // data: { pageLabel: '/faq' },
    // canActivate: [CmsPageGuard],
  },
  {
    path: 'my/static/page',
    component: AppStaticSalePageComponent,
    data: { pageLabel: '/faq' },
    canActivate: [CmsPageGuard],
  },
];

@NgModule({
  imports: [
    // standard non-spartacus routes
    RouterModule.forChild(routes),

    // semantic URLs are controlled
    UrlModule,

    // demonstrate custom product route configurations
    CustomProductRoutesModule,

    // use outlets to add a link to the header
    OutletRefModule,
  ],
  declarations: [AppStaticSalePageComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
