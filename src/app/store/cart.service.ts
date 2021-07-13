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
  updateCart(cart): void {
    this.cart = cart;
  }
  notifyCartStatus(): void {
    this.changeNotifier$.next('cart contents updated');
  }
}
