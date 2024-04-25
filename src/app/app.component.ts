import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce';
}
