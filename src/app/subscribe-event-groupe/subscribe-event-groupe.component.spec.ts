import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeEventGroupeComponent } from './subscribe-event-groupe.component';

describe('SubscribeEventGroupeComponent', () => {
  let component: SubscribeEventGroupeComponent;
  let fixture: ComponentFixture<SubscribeEventGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeEventGroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeEventGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
