import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartService } from './services/cart.service';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ecomm2';

  cartService = inject(CartService);

  ngOnInit(): void {
    // const cartData = JSON.parse(localStorage.getItem('bestShopCart') || '[]');
    // this.cartService.cart.set([...cartData]);
  }
}
