/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyActiveCartService } from './my-active-cart.service';

describe('Service: MyActiveCart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyActiveCartService]
    });
  });

  it('should ...', inject([MyActiveCartService], (service: MyActiveCartService) => {
    expect(service).toBeTruthy();
  }));
});
