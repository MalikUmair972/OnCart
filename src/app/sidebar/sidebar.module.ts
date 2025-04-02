import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { PriceSelectorComponent } from './price-selector/price-selector.component';
import { SideComponent } from './side/side.component';

@NgModule({
  declarations: [PriceSelectorComponent, SideComponent],
  imports: [CommonModule, MatSliderModule, FormsModule, MatButtonModule, MatIconModule],
  exports: [PriceSelectorComponent, SideComponent],
})
export class SidebarModule {}
