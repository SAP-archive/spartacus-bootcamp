import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { MyActiveCartService } from './my-active-cart.service';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: ActiveCartService, useClass: MyActiveCartService }],
})
export class ServicesModule {}
