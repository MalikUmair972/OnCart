import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSelectorComponent } from './price-selector.component';

describe('PriceSelectorComponent', () => {
  let component: PriceSelectorComponent;
  let fixture: ComponentFixture<PriceSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
