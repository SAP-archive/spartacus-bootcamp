import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Config, ConfigModule } from '@spartacus/core';
import { defaultThemeConfig } from './default-theme-config';
import { ThemeConfig } from './theme.config';

export function demoThemeConfigFactory(config: ThemeConfig) {
  return (): Promise<any> => {
    console.log(`Custom theme configured: ${config.theme}`);
    return null;
  };
}

/**
 * This feature demonstrate to provide a custom config object to the ConfigModule,
 * so that it can be configured using the ConfigModule.
 *
 * The example introduces a new config (`ThemeConfig`), where a theme can be configured.
 * The default value of the theme is configured in this module, but can be provided
 * at application level.
 */
@NgModule({
  providers: [
    // inject a custom config object
    {
      provide: ThemeConfig,
      useExisting: Config,
    },
    // Implement a factory to demonstrate the configured theme
    {
      provide: APP_INITIALIZER,
      useFactory: demoThemeConfigFactory,
      deps: [ThemeConfig],
      multi: true,
    },
  ],
  imports: [ConfigModule.withConfig(defaultThemeConfig)],
})
export class BootcampConfigModule {}
