import { NgModule } from '@angular/core';
import { CmsStructureConfig, ConfigModule } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';
import { layoutConfig } from './layout.config';
import { staticCmsonfig } from './staitic-cms.config';

@NgModule({
  imports: [
    ConfigModule.withConfig(staticCmsonfig as CmsStructureConfig),
    ConfigModule.withConfig(layoutConfig as LayoutConfig),
  ],
})
export class StaticCmsModule {}
