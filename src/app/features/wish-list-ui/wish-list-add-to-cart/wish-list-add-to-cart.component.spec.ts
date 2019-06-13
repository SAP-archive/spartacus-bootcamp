import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListAddToCartComponent } from './wish-list-add-to-cart.component';

describe('WishListAddToCartComponent', () => {
  let component: WishListAddToCartComponent;
  let fixture: ComponentFixture<WishListAddToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListAddToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
