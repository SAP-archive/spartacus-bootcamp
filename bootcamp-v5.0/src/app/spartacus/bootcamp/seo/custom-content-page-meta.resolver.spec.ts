import { TestBed } from '@angular/core/testing';

import CustomContentPageMetaResolver from './custom-content-page-meta.resolver';

describe('CustomContentPageResolver', () => {
  let resolver: CustomContentPageMetaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CustomContentPageMetaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
