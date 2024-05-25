import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyReicipeComponent } from './daily-reicipe.component';

describe('DailyReicipeComponent', () => {
  let component: DailyReicipeComponent;
  let fixture: ComponentFixture<DailyReicipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyReicipeComponent]
    });
    fixture = TestBed.createComponent(DailyReicipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
