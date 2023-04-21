import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletComponent } from './outlet.component';

describe('OutletComponent', () => {
  let component: OutletComponent;
  let fixture: ComponentFixture<OutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
