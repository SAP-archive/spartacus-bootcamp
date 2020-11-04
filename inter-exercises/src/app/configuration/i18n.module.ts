import { NgModule } from '@angular/core';
import {
  translationChunksConfig,
  translations as ENGLISH_TRANSLATIONS,
} from '@spartacus/assets';
import { ConfigModule, I18nConfig } from '@spartacus/core';

const GERMAN_TRANSLATIONS = {
  de: {
    common: {
      searchBox: {
        placeholder: 'Suchen sie hier',
      },
      miniLogin: {
        signInRegister: 'Melden / Registrieren',
      },
    },
    product: {
      addToCart: {
        addToCart: 'In den Warenkorb legen',
      },
    },
  },
};

@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      i18n: {
        resources: {
          ...GERMAN_TRANSLATIONS,
          ...ENGLISH_TRANSLATIONS,
        },
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    } as I18nConfig),
  ],
})
export class I18nConfigurationModule {}
