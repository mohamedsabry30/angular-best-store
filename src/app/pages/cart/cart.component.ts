import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PlusMinusComponent } from '../../components/plus-minus/plus-minus.component';

@Component({
  selector: 'app-cart',
  imports: [OrderSummaryComponent, PlusMinusComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartService = inject(CartService);

  calcPrice(product: any) {
    return (product.price * product.quantity).toFixed(2);
  }
}
