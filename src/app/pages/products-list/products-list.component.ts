import { LandingComponent } from './../../components/landing/landing.component';
import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product-model';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent, LandingComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  initialProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  outStockRand(n: number) {
    return Math.trunc(Math.random() * n);
  }

  setFakeStock() {
    //   // let i = this.outStockRand(20);
    //   // let x = this.outStockRand(20);

    //   let [i, x, y] = [3, 8, 17];

    //   // set fake stock
    //   this.products.forEach((p) => {
    //     if (p.id === i || p.id === x || p.id === y) {
    //       p.stock = 0;
    //     } else p.stock = this.outStockRand(100);
    //   });
    const arr = this.productsService.stockArr;
    this.products.forEach((p, i) => {
      p.stock = arr[i];
    });
  }

  filter(cate: string): void {
    if (cate === 'all') {
      this.products = [...this.initialProducts];
      return;
    }

    const filterd = this.initialProducts.filter((p) => p.category === cate);
    this.products = [...filterd];
  }

  fetchProducts() {
    this.productsService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.setFakeStock();
        this.initialProducts = [...this.products];
      },
      error: (error) => {
        alert('error fetching data');
      },
    });

    this.setFakeStock();
  }

  ngOnInit(): void {
    this.fetchProducts();
  }
}
