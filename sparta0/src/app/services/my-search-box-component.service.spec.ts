/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MySearchBoxComponentService } from './my-search-box-component.service';

describe('Service: MySearchBoxComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySearchBoxComponentService]
    });
  });

  it('should ...', inject([MySearchBoxComponentService], (service: MySearchBoxComponentService) => {
    expect(service).toBeTruthy();
  }));
});
