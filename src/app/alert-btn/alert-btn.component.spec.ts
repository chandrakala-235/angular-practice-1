import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBtnComponent } from './alert-btn.component';

describe('AlertBtnComponent', () => {
  let component: AlertBtnComponent;
  let fixture: ComponentFixture<AlertBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
