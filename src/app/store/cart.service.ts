import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[];
  private changeNotifier$: Subject<any> = new Subject<any>();
  public cartChange: Observable<any> = this.changeNotifier$.asObservable();

  constructor() {
    let sessionData = JSON.parse(localStorage.getItem('cart')) || [];
    this.cart = sessionData;
  }

  getCart(): IProduct[] {
    return this.cart;
  }
  addToCart(product: IProduct) {
    let cart = [...this.cart];
    product.quantity = product.quantity + 1;
    if (cart.length == 0) {
      cart.push(product);
    } else {
      let index = cart.findIndex((el) => el.id == product.id);
      if (index > -1) {
        cart[index] = product;
      } else {
        cart.push(product);
      }
    }
    this.updateCart(cart);
  }
  updateCart(cart): void {
    this.cart = cart;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  notifyCartStatus(): void {
    this.changeNotifier$.next('cart contents updated');
  }
}
