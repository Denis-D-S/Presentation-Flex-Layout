import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdDivComponent } from './third-div.component';

describe('ThirdDivComponent', () => {
  let component: ThirdDivComponent;
  let fixture: ComponentFixture<ThirdDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
