import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBtnComponent } from './hello-btn.component';

describe('HelloBtnComponent', () => {
  let component: HelloBtnComponent;
  let fixture: ComponentFixture<HelloBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
