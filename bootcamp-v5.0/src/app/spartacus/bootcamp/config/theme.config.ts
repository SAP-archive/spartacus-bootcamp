import { Config } from "@spartacus/core";

export abstract class ThemeConfig extends Config{
  theme?: Theme;
}

export enum Theme {
  STRAWBERRIES = 'Strawberries',
  CHOCOLATE = 'Chocolate',
}
