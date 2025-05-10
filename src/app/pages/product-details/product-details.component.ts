import { PlusMinusComponent } from './../../components/plus-minus/plus-minus.component';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product-model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [PlusMinusComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  currentProduct = <Product>{};
  productsService = inject(ProductsService);
  activatedRoute = inject(ActivatedRoute);
  cartService = inject(CartService);

  getIndex() {
    return this.cartService.getItmeIndex(this.currentProduct);
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.productsService.getSingleProduct(this.id).subscribe({
      next: (success) => {
        this.currentProduct = success;
        this.currentProduct.stock = this.productsService.stockArr[this.id - 1];
      },
    });
  }
}
