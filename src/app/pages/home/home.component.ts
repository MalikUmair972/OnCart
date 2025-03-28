import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  miniCategories = [
    { Image: 'assets/shoes.png', categoryName: 'Accessories' },
    { Image: 'assets/shoes.png', categoryName: 'Accessories' },
    { Image: 'assets/shoes.png', categoryName: 'Accessories' },
    { Image: 'assets/shoes.png', categoryName: 'Accessories' },
    { Image: 'assets/shoes.png', categoryName: 'Accessories' },
    { Image: 'assets/shoes.png', categoryName: 'Accessories' },
    { Image: 'assets/shoes.png', categoryName: 'Accessories' },
  ];
}
