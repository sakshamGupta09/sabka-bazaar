import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[];
  private changeNotifier$: BehaviorSubject<number>;
  public cartChange: Observable<number>;

  constructor() {
    let sessionData = JSON.parse(localStorage.getItem('cart')) || [];
    this.cart = sessionData;
    this.changeNotifier$ = new BehaviorSubject(this.cart.length);
    this.cartChange = this.changeNotifier$.asObservable();
  }

  getCart(): IProduct[] {
    return this.cart;
  }
  addToCart(product: IProduct) {
    let cart = [...this.cart];
    if (cart.length == 0) {
      product.quantity = 1;
      cart.push(product);
    } else {
      let index = cart.findIndex((el) => el.id == product.id);
      if (index > -1) {
        product.quantity = cart[index].quantity + 1;
        cart[index] = product;
      } else {
        product.quantity = 1;
        cart.push(product);
      }
    }
    this.updateCart(cart);
  }
  increaseQuantity(id: string): void {
    let cart = [...this.cart];
    let index = cart.findIndex((el) => el.id === id);
    let product = { ...cart[index] };
    product.quantity = product.quantity + 1;
    cart[index] = product;
    this.updateCart(cart);
  }
  decreaseQuantity(id: string): void {
    let cart = [...this.cart];
    let index = cart.findIndex((el) => el.id === id);
    let product = { ...cart[index] };
    if (product.quantity === 1) {
      cart.splice(index, 1);
    } else {
      product.quantity = product.quantity - 1;
      cart[index] = product;
    }
    this.updateCart(cart);
  }
  calculateSubtotal(): number {
    return this.cart.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    );
  }
  updateCart(cart): void {
    this.cart = cart;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.notifyCartStatus();
  }
  notifyCartStatus(): void {
    this.changeNotifier$.next(this.cart.length);
  }
}
