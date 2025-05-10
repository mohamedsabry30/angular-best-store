import { CartService } from '../../services/cart.service';
import { Product } from './../../models/product-model';
import { Component, input, output, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus-minus',
  imports: [],
  templateUrl: './plus-minus.component.html',
  styleUrl: './plus-minus.component.scss',
})
export class PlusMinusComponent implements OnInit {
  product = input.required<Product>();

  cartService = inject(CartService);

  getProductQuantity() {
    return this.cartService.getQuantity(this.product());
  }

  ngOnInit(): void {}
}
