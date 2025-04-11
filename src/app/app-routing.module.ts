import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
