import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Config, ConfigModule } from '@spartacus/core';
import { defaultThemeConfig } from './default-theme-config';
import { ThemeConfig } from './theme.config';

export function initializeApp1(config: ThemeConfig) {
  return (): Promise<any> => {
    console.log(`Custom theme configured: ${config.theme}`);
    return null;
  };
}

@NgModule({
  providers: [
    {
      provide: ThemeConfig,
      useExisting: Config,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp1,
      deps: [ThemeConfig],
      multi: true,
    },
  ],
  imports: [ConfigModule.withConfig(defaultThemeConfig)],
})
export class BootcampConfigModule {}
