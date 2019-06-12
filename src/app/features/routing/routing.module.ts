import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigModule, UrlModule } from '@spartacus/core';
import { OutletRefModule } from '@spartacus/storefront';
import { AppStaticLinkComponent } from './route-link.component';
import { AppStaticPageComponent } from './static-page.component';

const routes: Routes = [
  {
    path: 'static-page',
    component: AppStaticPageComponent
  }
];

@NgModule({
  imports: [
    // standard non-spartacus routes
    RouterModule.forChild(routes),
    // configurable routes
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: ['product-catalog/:productCode/:name', 'product-alias/:productCode'],
            paramsMapping: { productCode: 'code' }
          }
        }
      }
    }),

    // semantic URLs are controlled
    UrlModule,

    // use outlets to add a link to the header
    OutletRefModule
  ],
  declarations: [AppStaticPageComponent, AppStaticLinkComponent],
  exports: [RouterModule, AppStaticLinkComponent]
})
export class AppRoutingModule {}
