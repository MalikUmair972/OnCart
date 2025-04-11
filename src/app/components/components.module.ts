import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { NavbarComponent } from './navbar/navbar.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './product/product.component';
import { CategoryComponent } from './category/categories.component';
import { SearchbarComponent } from './navbar/searchbar/searchbar.component';

register();

@NgModule({
  declarations: [
    NavbarComponent,
    SelectDropdownComponent,
    FooterComponent,
    SliderComponent,
    ProductsComponent,
    CategoryComponent,
    SearchbarComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NavbarComponent,
    SelectDropdownComponent,
    FooterComponent,
    SliderComponent,
    ProductsComponent,
    CategoryComponent
  ],
})
export class ComponentsModule {}
