import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcomComponent } from './navbarcom.component';

describe('NavbarcomComponent', () => {
  let component: NavbarcomComponent;
  let fixture: ComponentFixture<NavbarcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarcomComponent]
    });
    fixture = TestBed.createComponent(NavbarcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
