import { NgModule } from '@angular/core';
import { CmsStructureConfig, ConfigModule } from '@spartacus/core';
import { staticCmsonfig } from './static-cms.config';

@NgModule({
  imports: [ConfigModule.withConfig(staticCmsonfig as CmsStructureConfig)],
})
export class BootcampStaticCmsModule {}
