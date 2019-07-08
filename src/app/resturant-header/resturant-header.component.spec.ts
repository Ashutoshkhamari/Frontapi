import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantHeaderComponent } from './resturant-header.component';

describe('ResturantHeaderComponent', () => {
  let component: ResturantHeaderComponent;
  let fixture: ComponentFixture<ResturantHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
