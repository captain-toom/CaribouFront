import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebandComponent } from './homeband.component';

describe('HomebandComponent', () => {
  let component: HomebandComponent;
  let fixture: ComponentFixture<HomebandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
