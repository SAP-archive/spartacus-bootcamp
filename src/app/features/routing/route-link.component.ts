import { Component } from '@angular/core';

@Component({
  selector: 'app-static-link',
  template: `
    <ng-template cxOutletRef="SiteLinks" cxOutletPos="before">
      <a routerLink="static-page" style="font-size: 2vw">🦄</a>
    </ng-template>
  `
})
export class AppStaticLinkComponent {}
