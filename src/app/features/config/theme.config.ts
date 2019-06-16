import { ServerConfig } from '@spartacus/core';

export abstract class ThemeConfig extends ServerConfig {
  theme?: Theme;
}

export enum Theme {
  STRAWBERRIES = 'Strawberries',
  CHOCOLATE = 'Chocolate',
}
