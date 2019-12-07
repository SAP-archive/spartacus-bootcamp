import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
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
    // dependend module for semantic URLs
    UrlModule,

    // standard non-spartacus routes
    RouterModule.forChild(staticRoutes),

    // demonstrate custom product route configurations
    CustomProductRoutesModule,
  ],
  declarations: [AppStaticPageComponent],
  exports: [RouterModule],
})
export class BootcampRoutingModule {}
