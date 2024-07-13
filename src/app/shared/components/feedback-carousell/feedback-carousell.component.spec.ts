import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCarousellComponent } from './feedback-carousell.component';

describe('FeedbackCarousellComponent', () => {
  let component: FeedbackCarousellComponent;
  let fixture: ComponentFixture<FeedbackCarousellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackCarousellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackCarousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
