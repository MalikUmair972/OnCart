import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';

import { NavbarComponent } from './navbar/navbar.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';

@NgModule({
  declarations: [NavbarComponent, SelectDropdownComponent],
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
    MatDividerModule
  ],
  exports: [NavbarComponent, SelectDropdownComponent],
})
export class ComponentsModule {}
