import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompArchFeatModulesComponent } from './comp-arch-feat-modules.component';

describe('CompArchFeatModulesComponent', () => {
  let component: CompArchFeatModulesComponent;
  let fixture: ComponentFixture<CompArchFeatModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompArchFeatModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompArchFeatModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
