import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassionsComponent } from './passions.component';

describe('PassionsComponent', () => {
  let component: PassionsComponent;
  let fixture: ComponentFixture<PassionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
