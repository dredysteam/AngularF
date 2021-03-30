import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationExpressionsComponent } from './interpolation-expressions.component';

describe('InterpolationExpressionsComponent', () => {
  let component: InterpolationExpressionsComponent;
  let fixture: ComponentFixture<InterpolationExpressionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationExpressionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationExpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
