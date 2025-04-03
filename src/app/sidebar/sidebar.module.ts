import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { PriceSelectorComponent } from './price-selector/price-selector.component';
import { SideComponent } from './side/side.component';
import { BrandSelectorComponent } from './brand-selector/brand-selector.component';
import { RatingSelectorComponent } from './rating-selector/rating-selector.component';

@NgModule({
  declarations: [PriceSelectorComponent, SideComponent, BrandSelectorComponent, RatingSelectorComponent],
  imports: [CommonModule, MatSliderModule, FormsModule, MatButtonModule, MatIconModule, MatCheckboxModule],
  exports: [PriceSelectorComponent, SideComponent],
})
export class SidebarModule {}
