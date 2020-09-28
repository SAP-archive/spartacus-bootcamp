import { NgModule } from '@angular/core';
import { ConfigModule, I18nConfig } from '@spartacus/core';
import { translations as ENGLISH_TRANSLATIONS, translationChunksConfig } from '@spartacus/assets';


const GERMAN_TRANSLATIONS = {
  de: {
    common: {
      searchBox: {
        placeholder: 'Suchen sie hier'
      }
    }
  }
};

@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      i18n: {
        resources: {
          ...GERMAN_TRANSLATIONS,
          ...ENGLISH_TRANSLATIONS
        },
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    } as I18nConfig)
  ]
})
export class I18nConfigurationModule { }
