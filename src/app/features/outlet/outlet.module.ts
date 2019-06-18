import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  IconModule,
  OutletRefModule,
  PageComponentModule,
} from '@spartacus/storefront';
import { OutletComponent } from './outlet.component';

@NgModule({
  imports: [CommonModule, OutletRefModule, PageComponentModule, IconModule],
  declarations: [OutletComponent],
  exports: [OutletComponent],
})
export class AppOutletModule {}
