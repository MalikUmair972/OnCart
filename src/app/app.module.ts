import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './auth/login/login.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { SocialLoginComponent } from './auth/social-login/social-login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ComponentsModule } from './components/components.module';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './pages/home/home.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductComponent } from './pages/product/product.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductCarouselComponent } from './pages/product-details/product-carousel/product-carousel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SocialLoginComponent,
    SignupComponent,
    HomeComponent,
    CategoriesComponent,
    ProductComponent,
    BreadcrumbsComponent,
    ProductDetailsComponent,
    ProductCarouselComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ComponentsModule,
    SidebarModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
