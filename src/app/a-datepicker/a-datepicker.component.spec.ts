import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADatepickerComponent } from './a-datepicker.component';

describe('AirDatepickerComponent', () => {
  let component: ADatepickerComponent;
  let fixture: ComponentFixture<ADatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
