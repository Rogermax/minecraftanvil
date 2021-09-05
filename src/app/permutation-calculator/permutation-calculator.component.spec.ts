import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationCalculatorComponent } from './permutation-calculator.component';

describe('PermutationCalculatorComponent', () => {
  let component: PermutationCalculatorComponent;
  let fixture: ComponentFixture<PermutationCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermutationCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermutationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
