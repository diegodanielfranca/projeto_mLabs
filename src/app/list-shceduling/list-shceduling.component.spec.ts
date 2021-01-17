import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShcedulingComponent } from './list-shceduling.component';

describe('ListShcedulingComponent', () => {
  let component: ListShcedulingComponent;
  let fixture: ComponentFixture<ListShcedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListShcedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShcedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
