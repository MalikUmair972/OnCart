import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  payments = [
    { Image: 'assets/meezan.png' },
    { Image: 'assets/mastercard.png' },
    { Image: 'assets/visa.png' },
    { Image: 'assets/easypaisa.png' },
    { Image: 'assets/jazz.png' },
  ];
}
