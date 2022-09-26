import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDivComponent } from './second-div.component';

describe('SecondDivComponent', () => {
  let component: SecondDivComponent;
  let fixture: ComponentFixture<SecondDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
