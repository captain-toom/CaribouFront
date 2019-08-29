import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilBarComponent } from './my-profil-bar.component';

describe('MyProfilBarComponent', () => {
  let component: MyProfilBarComponent;
  let fixture: ComponentFixture<MyProfilBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfilBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
