import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofilclientComponent } from './myprofilclient.component';

describe('MyprofilclientComponent', () => {
  let component: MyprofilclientComponent;
  let fixture: ComponentFixture<MyprofilclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofilclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofilclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
