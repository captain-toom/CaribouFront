import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofilgroupeComponent } from './myprofilgroupe.component';

describe('MyprofilgroupeComponent', () => {
  let component: MyprofilgroupeComponent;
  let fixture: ComponentFixture<MyprofilgroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofilgroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofilgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
