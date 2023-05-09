import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { BaseStorefrontModule } from "@spartacus/storefront";
import { CatalogContextModule } from './bootcamp/catalog-context/catalog-context.module';
import { BootcampStaticCmsModule } from './bootcamp/cms/static-cms.module';
import { BootcampComponentModule } from './bootcamp/component/component.module';
import { BootcampConfigModule } from './bootcamp/config/config.module';
import { Theme, ThemeConfig } from './bootcamp/config/theme.config';
import { BootcampDataBindingModule } from './bootcamp/data-binding/data-binding.module';
import { BootcampI18nModule } from './bootcamp/i18n/i18n.module';
import { BootcampIconModule } from './bootcamp/icon/icon.module';
import { BootcampLayoutConfigModule } from './bootcamp/layout/layout.module';
import { BootcampMultiSiteModule } from './bootcamp/multi-site/multi-site.module';
import { BootcampOutletModule } from './bootcamp/outlet/outlet.module';
import { BootcampRoutingModule } from './bootcamp/routing/routing.module';
import { BootcampSeoModule } from './bootcamp/seo/seo.module';

@NgModule({
  declarations: [],
  imports: [  
    /* SEO for custom login page and pageMeta */
    BootcampSeoModule,
    
    /* Custom Data-binding for product */
    BootcampDataBindingModule,
    
    /* Routing */
    BootcampRoutingModule,

    /* Module to configure the site context with multi-site features */
    BootcampMultiSiteModule,
    
    /* Demonstrate a custom context */
    CatalogContextModule,

    /* Demonstrate static CMS config */
    BootcampStaticCmsModule,

    BootcampConfigModule,
    /* Provide a custom theme to the `ThemeConfig` */
    ConfigModule.withConfig({ theme: Theme.STRAWBERRIES } as ThemeConfig),

    /* Demonstrate outlets. Don't forget to enable the `<app-outlets></app-outlets>` in the app.component.html */
    BootcampOutletModule,

    /* Demonstrate icon module */
    BootcampIconModule,

    /* Demonstrate Internationalization module */
    BootcampI18nModule,

    /* demonstrates layout configuration */
    BootcampLayoutConfigModule,

    /* Demonstrate the addition of a custom component, example : Custom Banner */
    BootcampComponentModule,

  ],
  exports: [BaseStorefrontModule]
})
export class SpartacusModule { }
