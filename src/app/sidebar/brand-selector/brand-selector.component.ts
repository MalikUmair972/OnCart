import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-selector',
  templateUrl: './brand-selector.component.html',
  styleUrl: './brand-selector.component.scss'
})
export class BrandSelectorComponent {
 brands = [
   'Samsung', 'Iphone', 'Google Pixel', 'Redmi', 'Oppo', 'Vivo'
 ]
}
