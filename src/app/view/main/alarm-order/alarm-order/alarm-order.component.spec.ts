import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmOrderComponent } from './alarm-order.component';

describe('AlarmOrderComponent', () => {
  let component: AlarmOrderComponent;
  let fixture: ComponentFixture<AlarmOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
