import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrizeComponent } from './new-prize.component';

describe('NewPrizeComponent', () => {
  let component: NewPrizeComponent;
  let fixture: ComponentFixture<NewPrizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPrizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
