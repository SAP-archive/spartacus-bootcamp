import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  IconModule,
  OutletRefModule,
  PageComponentModule,
} from '@spartacus/storefront';
import { OuletComponent } from './outlet.component';

@NgModule({
  imports: [CommonModule, OutletRefModule, PageComponentModule, IconModule],
  declarations: [OuletComponent],
  exports: [OuletComponent],
})
export class AppOutletModule {}
