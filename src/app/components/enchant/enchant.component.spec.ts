import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantComponent } from './enchant.component';

describe('EnchantComponent', () => {
  let component: EnchantComponent;
  let fixture: ComponentFixture<EnchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
