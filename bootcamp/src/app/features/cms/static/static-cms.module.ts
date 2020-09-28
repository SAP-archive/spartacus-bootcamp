import { NgModule } from '@angular/core';
import { CmsStructureConfig, ConfigModule } from '@spartacus/core';
import { layoutConfig } from './layout.config';
import { staticCmsonfig } from './static-cms.config';

@NgModule({
  imports: [
    ConfigModule.withConfig(staticCmsonfig as CmsStructureConfig),
    ConfigModule.withConfig(layoutConfig),
  ],
})
export class BootcampStaticCmsModule {}
