import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityHeaderComponent } from './charity-header.component';

describe('CharityHeaderComponent', () => {
  let component: CharityHeaderComponent;
  let fixture: ComponentFixture<CharityHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
