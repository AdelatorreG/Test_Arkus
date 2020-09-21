import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutNestedComponent } from './logout-nested.component';

describe('LogoutNestedComponent', () => {
  let component: LogoutNestedComponent;
  let fixture: ComponentFixture<LogoutNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
