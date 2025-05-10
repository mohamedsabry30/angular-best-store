import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  cartItems() {
    let items = 0;
    this.cart().forEach((item: any) => {
      items += item.quantity;
    });
    return items;
  }

  calcNewQuantity(product: Product, change: number): void {
    const productIndex = this.getItmeIndex(product);

    const qnt: any = this.cart()[productIndex].quantity;
    const productStock: any = this.cart()[productIndex].stock;

    if (qnt < 2 && change < 0) {
      this.removeItem(product);
      return;
    }

    if (productStock === qnt && change > 0) {
      return;
    }

    this.cart.update((cart) => {
      cart[productIndex].quantity = qnt + change;
      return [...cart];
    });

    // this.saveLocalCart();
  }

  quantityPlus(product: Product) {
    this.calcNewQuantity(product, 1);
  }

  quantityMinus(product: Product) {
    this.calcNewQuantity(product, -1);
  }

  addToCart(product: Product): void {
    const productIndex: number = this.getItmeIndex(product);

    if (productIndex < 0) {
      product.quantity = 1;
      this.cart.set([...this.cart(), product]);
      // this.saveLocalCart();
    } else this.calcNewQuantity(product, 1);
  }

  removeItem(item: Product) {
    this.cart.set(this.cart().filter((el) => el.id != item.id));
    // this.saveLocalCart();
  }

  clearCart(): void {
    this.cart.set([]);
    // this.saveLocalCart();
  }

  checkCartForProduct(product: Product): boolean {
    let bool = false;
    this.cart().forEach((el) => {
      if (el.id === product.id) {
        bool = true;
      }
    });

    return bool;
  }

  getItmeIndex(product: Product): any {
    let index = -1;
    this.cart().forEach((el, i) => {
      if (el.id === product.id) {
        index = i;
      }
    });

    return index;
  }

  getQuantity(product: Product) {
    const itemIndex = this.getItmeIndex(product);
    return this.cart()[itemIndex].quantity;
  }

  // saveLocalCart() {
  //   localStorage.setItem('bestShopCart', JSON.stringify(this.cart()));
  // }
}
