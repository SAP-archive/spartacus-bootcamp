import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { OutletRefModule } from '@spartacus/storefront';
import { CustomProductRoutesModule } from './product-routes.module';
import { AppStaticPageComponent as AppStaticSalePageComponent } from './static-page.component';

const routes: Routes = [
  {
    path: 'sale',
    component: AppStaticSalePageComponent,
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
