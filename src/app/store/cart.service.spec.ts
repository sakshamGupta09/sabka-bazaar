import { TestBed } from '@angular/core/testing';
import { PRODUCTS } from 'server/db-data';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
    });
    service = TestBed.inject(CartService);
  });

  it('should fetch the cart', () => {
    service['cart'] = [PRODUCTS[0]];
    const cart = service.getCart();
    expect(cart).toBeTruthy();
    expect(cart[0]).toBeTruthy();
    expect(cart[0].id).toBe(PRODUCTS[0].id);
  });
  it('should add product to an empty cart', () => {
    service['cart'] = [];
    service.addToCart(PRODUCTS[0]);
    const cart = service.getCart();
    expect(cart).toBeTruthy();
    expect(cart.length).toBe(1);
    expect(cart[0].id).toBe(PRODUCTS[0].id);
    expect(cart[0].quantity).toBe(1);
  });
  it('should add a new product to an existing cart', () => {
    service['cart'] = [];
    service.addToCart(PRODUCTS[0]);
    service.addToCart(PRODUCTS[1]);
    const cart = service.getCart();

    expect(cart).toBeTruthy();
    expect(cart.length).toBe(2);
    expect(cart[0].quantity).toBe(1);
    expect(cart[1].quantity).toBe(1);
  });
  it('should increase the quantity of the item in cart', () => {
    service['cart'] = [];
    service.addToCart(PRODUCTS[0]);
    service.addToCart(PRODUCTS[0]);
    const cart = service.getCart();
    expect(cart).toBeTruthy();
    expect(cart.length).toBe(1);
    expect(cart[0].quantity).toBe(2);
  });
  it('should decrease the quantity of a product', () => {
    service['cart'] = [];
    service.addToCart(PRODUCTS[0]);
    service.addToCart(PRODUCTS[0]);
    service.decreaseQuantity(PRODUCTS[0].id);
    const cart = service.getCart();
    expect(cart).toBeTruthy();
    expect(cart.length).toBe(1);
    expect(cart[0].quantity).toBe(1);
  });
  it('should remove the product if quantity becomes 0', () => {
    service['cart'] = [];
    service.addToCart(PRODUCTS[0]);
    service.decreaseQuantity(PRODUCTS[0].id);
    const cart = service.getCart();
    expect(cart).toBeTruthy();
    expect(cart.length).toBe(0);
  });
  it('should calculate the subtoatal', () => {
    service['cart'] = [];
    service.addToCart(PRODUCTS[0]);
    service.addToCart(PRODUCTS[0]);
    service.addToCart(PRODUCTS[1]);
    const sum = service.calculateSubtotal();
    expect(sum).toBe(361);
  });
});
