import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthDivComponent } from './fourth-div.component';

describe('FourthDivComponent', () => {
  let component: FourthDivComponent;
  let fixture: ComponentFixture<FourthDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
