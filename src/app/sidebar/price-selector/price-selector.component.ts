import { Component } from '@angular/core';

@Component({
  selector: 'app-price-selector',
  templateUrl: './price-selector.component.html',
  styleUrl: './price-selector.component.scss'
})
export class PriceSelectorComponent {
  minValue = 3000;
  maxValue = 50000;

  minLabelPosition = 0;
  maxLabelPosition = 100;

  updatePositions() {
    const min = 3000;
    const max = 50000;


    this.minLabelPosition = ((this.minValue - min) / (max - min)) * 100;
    this.maxLabelPosition = ((this.maxValue - min) / (max - min)) * 100;
  }
}
