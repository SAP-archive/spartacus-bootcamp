import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';

/**
 * This feature demonstrates the usage of web components in Spartacus.
 * Web components can be implement in any technology, such as reactjs,
 * while the Application is build in Angular.
 * This feature must be carefully considered, as there are multiple
 * PROs and CONs.
 *
 * This bootcamp feature demonstrates 2 react components, which are used
 * to render the breadcrumb and paragraph content. While the components
 * are build in React, they can leverage the Spartacus API by using the
 * imported `cxAPI`, which provides access to all the Spartacus facades.
 */
@NgModule({
  imports: [
    ConfigModule.withConfig({
      cmsComponents: {
        BreadcrumbComponent: {
          component: 'assets/web-components/bundle.js#breadcrumb-cmp',
        },
        CMSParagraphComponent: {
          component: 'assets/web-components/bundle.js#cms-data',
        },
      },
    } as CmsConfig),
  ],
})
export class BootcampWebComponentModule {}
