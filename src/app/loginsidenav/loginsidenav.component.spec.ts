import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsidenavComponent } from './loginsidenav.component';

describe('LoginsidenavComponent', () => {
  let component: LoginsidenavComponent;
  let fixture: ComponentFixture<LoginsidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
