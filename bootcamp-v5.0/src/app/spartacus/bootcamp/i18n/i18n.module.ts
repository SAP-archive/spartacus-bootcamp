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
  return (): Promise<void> => {
    return translation
      .translate('customFeature.example', {
        param2: 2,
        param1: 1, 
      })
      .pipe(filter(l => !l.startsWith('[')))
      .toPromise()
      .then(l =>
        messageService.add(`Custom label added: ${l}`, messageType),

      )
      .catch(error => {
        // handle error here
        console.log(`ERROR !`);
      });
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
