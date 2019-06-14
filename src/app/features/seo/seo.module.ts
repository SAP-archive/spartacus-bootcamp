import { NgModule } from '@angular/core';
import { ContentPageMetaResolver, PageMetaResolver } from '@spartacus/core';
import { CustomContentPageMetaResolver } from './custom-content-page-meta.resolver';
import { LoginPageMetaResolver } from './login-meta.resolver';

@NgModule({
  providers: [
    // replace existing page meta resolver
    {
      provide: ContentPageMetaResolver,
      useClass: CustomContentPageMetaResolver,
    },
    // add new page meta resolver
    {
      provide: PageMetaResolver,
      useExisting: LoginPageMetaResolver,
      multi: true,
    },
  ],
})
export class AppSeoModule {}
