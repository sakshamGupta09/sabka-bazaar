import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get('categories');
  }
  getProducts(): Observable<any> {
    return this.http.get('products');
  }
}
