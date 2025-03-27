import { Component } from '@angular/core';

@Component({
  selector: 'app-looking-for',
  templateUrl: './looking-for.component.html',
  styleUrl: './looking-for.component.scss',
})
export class LookingForComponent {
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
