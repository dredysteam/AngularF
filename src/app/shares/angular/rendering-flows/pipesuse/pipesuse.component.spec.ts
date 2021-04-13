import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesuseComponent } from './pipesuse.component';

describe('PipesuseComponent', () => {
  let component: PipesuseComponent;
  let fixture: ComponentFixture<PipesuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
