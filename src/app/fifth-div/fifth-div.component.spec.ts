import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthDivComponent } from './fifth-div.component';

describe('FifthDivComponent', () => {
  let component: FifthDivComponent;
  let fixture: ComponentFixture<FifthDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
