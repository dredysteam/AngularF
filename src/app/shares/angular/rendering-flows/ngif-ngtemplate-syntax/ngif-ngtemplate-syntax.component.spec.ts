import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifNgtemplateSyntaxComponent } from './ngif-ngtemplate-syntax.component';

describe('NgifNgtemplateSyntaxComponent', () => {
  let component: NgifNgtemplateSyntaxComponent;
  let fixture: ComponentFixture<NgifNgtemplateSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifNgtemplateSyntaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifNgtemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
