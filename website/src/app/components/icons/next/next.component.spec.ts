import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextIconComponent } from './next.component';

describe('NextIconComponent', () => {
  let component: NextIconComponent;
  let fixture: ComponentFixture<NextIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
