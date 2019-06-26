import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { OutletRefModule } from '@spartacus/storefront';
import { staticRoutes } from './custom-static-routes';
import { CustomProductRoutesModule } from './product-routes.module';
import { AppStaticPageComponent } from './static-page.component';

/**
 * This feature demonstrates the routing in Spartacus.
 *
 * In this code you'll find a demonstration of:
 * - CMS based routes, rendered with custom page component
 * - Custom (static) route, connected to CMS data
 * - The usage of the `routerLink` with the Spartacus `cxUrl` pipe
 * - Configuration of product routes (SEO, aliases) with additional (normalized) product data
 */
@NgModule({
  imports: [
    // standard non-spartacus routes
    RouterModule.forChild(staticRoutes),

    // semantic URLs are controlled by Spartacus
    UrlModule,

    // demonstrate custom product route configurations
    CustomProductRoutesModule,

    // use outlets to add a link to the header
    OutletRefModule,
  ],
  declarations: [AppStaticPageComponent],
  exports: [RouterModule],
})
export class BootcampRoutingModule {}
