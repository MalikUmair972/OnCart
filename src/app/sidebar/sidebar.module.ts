import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceSelectorComponent } from './price-selector/price-selector.component';



@NgModule({
  declarations: [PriceSelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [PriceSelectorComponent]
})
export class SidebarModule { }
