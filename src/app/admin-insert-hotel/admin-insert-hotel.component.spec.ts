import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsertHotelComponent } from './admin-insert-hotel.component';

describe('AdminInsertHotelComponent', () => {
  let component: AdminInsertHotelComponent;
  let fixture: ComponentFixture<AdminInsertHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInsertHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsertHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
