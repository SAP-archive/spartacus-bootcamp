import { NgModule } from '@angular/core';
import { CmsStructureConfig, ConfigModule } from '@spartacus/core';
import { staticCmsonfig } from './staitic-cms.config';

@NgModule({
  imports: [ConfigModule.withConfig(staticCmsonfig as CmsStructureConfig)],
})
export class StaticCmsModule {}
