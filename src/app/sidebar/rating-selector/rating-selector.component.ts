import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-selector',
  templateUrl: './rating-selector.component.html',
  styleUrl: './rating-selector.component.scss'
})
export class RatingSelectorComponent {
  ratings = [
    '4', '3', '2', '1'
  ]
}
