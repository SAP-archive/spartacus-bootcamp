import { TestBed } from '@angular/core/testing';

import { LoginPageMetaResolver } from './login-page-meta.resolver';

describe('LoginMetaResolver', () => {
  let resolver: LoginPageMetaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoginPageMetaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
