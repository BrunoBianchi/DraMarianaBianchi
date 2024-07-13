import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextscrollComponentComponent } from './textscroll-component.component';

describe('TextscrollComponentComponent', () => {
  let component: TextscrollComponentComponent;
  let fixture: ComponentFixture<TextscrollComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextscrollComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextscrollComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
