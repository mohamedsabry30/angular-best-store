import { CartService } from './../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { Product } from './../../../models/product-model';
import {
  Component,
  input,
  OnInit,
  inject,
  signal,
  computed,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlusMinusComponent } from '../../../components/plus-minus/plus-minus.component';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent, RouterModule, PlusMinusComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  product = input.required<Product>();
  // showPlusMinus = signal(false);

  // showPlusMinus = computed<boolean>(() => {
  //   let bool = false;
  //   this.cartService.cart().forEach((el) => {
  //     if (el.id === this.product().id) {
  //       bool = true;
  //     }
  //   });
  //   return bool;
  // });

  cartService = inject(CartService);

  initiateAddCart() {
    this.cartService.addToCart(this.product());

    // this.showPlusMinus.set(true);
  }

  getIndex() {
    return this.cartService.getItmeIndex(this.product());
  }

  ngOnInit(): void {
    // this.showPlusMinus.set(
    //   this.cartService.checkCartForProduct(this.product())
    // );
  }
}
