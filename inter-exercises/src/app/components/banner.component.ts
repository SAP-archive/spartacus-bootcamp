import { Component } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-banner',
  templateUrl: './banner.component.html',
})
export class CustomBannerComponent {
  data$: Observable<CmsBannerComponent> = this.componentData.data$;
  constructor(private componentData: CmsComponentData<CmsBannerComponent>) {}
}
