import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  IconModule,
  OutletRefModule,
  PageComponentModule,
} from '@spartacus/storefront';
import { OutletComponent } from './outlet.component';

/**
 * This feature demonstrates the way outlets can be used to replace (or ammend to)
 * existing components, slots or page templates.
 *
 * The below example demonstates adding UI to the footer section of the storefront.
 * ```
 * <ng-template cxOutletRef="footer" cxOutletPos="before">
 *   custom content…
 * </ng-template>
 * ```
 * More examples can be found in the `outlet.component.html` file.
 */
@NgModule({
  imports: [CommonModule, OutletRefModule, PageComponentModule, IconModule],
  declarations: [OutletComponent],
  exports: [OutletComponent],
})
export class BootcampOutletModule {}
