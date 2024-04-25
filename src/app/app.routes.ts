import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path : '' , component : HomeComponent},
    {path : 'products' , component : ProductsComponent},
    {path : 'product-details', component : ProductsDetailsComponent},
    {path : 'register' , component : AccountComponent},
    {path : 'cart' , component : CartComponent}
];
