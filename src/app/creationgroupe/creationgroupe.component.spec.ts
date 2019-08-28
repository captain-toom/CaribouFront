import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationgroupeComponent } from './creationgroupe.component';

describe('CreationgroupeComponent', () => {
  let component: CreationgroupeComponent;
  let fixture: ComponentFixture<CreationgroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationgroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
