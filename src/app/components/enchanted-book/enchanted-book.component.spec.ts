import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantedBookComponent } from './enchanted-book.component';

describe('EnchantedBookComponent', () => {
  let component: EnchantedBookComponent;
  let fixture: ComponentFixture<EnchantedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnchantedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchantedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
