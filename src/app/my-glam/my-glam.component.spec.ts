import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGlamComponent } from './my-glam.component';

describe('MyGlamComponent', () => {
  let component: MyGlamComponent;
  let fixture: ComponentFixture<MyGlamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGlamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
