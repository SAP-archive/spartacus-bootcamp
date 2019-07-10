import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  ConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  TranslationService,
} from '@spartacus/core';
import { filter } from 'rxjs/operators';

const messageType = GlobalMessageType.MSG_TYPE_INFO;

export function i18nMessageFactory(
  messageService: GlobalMessageService,
  translation: TranslationService
) {
  return (): Promise<any> => {
    translation
      .translate('customFeature.example', {
        param1: 1,
      })
      // as long as https://github.com/SAP/cloud-commerce-spartacus-storefront/issues/3229 is not fixed
      .pipe(filter(l => !l.startsWith('[')))
      .subscribe(l =>
        messageService.add(`Custom label added: ${l}`, messageType)
      );
    return null;
  };
}

@NgModule({
  imports: [
    I18nModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },

        chunks: {
          custom: ['customFeature'],
        },
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: i18nMessageFactory,
      deps: [GlobalMessageService, TranslationService],
      multi: true,
    },
  ],
})
export class BootcampI18nModule {}
