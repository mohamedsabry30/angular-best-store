import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  stockArr = [
    38, 2, 5, 0, 31, 26, 38, 0, 19, 49, 1, 10, 6, 8, 12, 18, 38, 0, 23, 44, 39,
  ];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getSingleProduct(id: number): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
