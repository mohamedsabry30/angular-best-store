import { Component, inject, computed } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  total = computed<number>(() => {
    let total: number = 0;
    for (let item of this.cartService.cart()) {
      const itemQnt: any = item.quantity;
      total += item.price * itemQnt;
    }
    return (total = +total.toFixed(2));
  });
}
