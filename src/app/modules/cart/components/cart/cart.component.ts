import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { CartService } from 'src/app/store/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  cart: IProduct[];
  subtotal: number;
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.renderCart();
  }
  renderCart(): void {
    this.cart = [...this.cartService.getCart()].map((el) => ({
      ...el,
      totalPrice: el.quantity * el.price,
    }));
    this.subtotal = this.cartService.calculateSubtotal();
  }
  productTracker(index: number, row: IProduct): string {
    return row.id;
  }
  increaseQuantity(id: string): void {
    this.cartService.increaseQuantity(id);
    this.renderCart();
  }
  decreaseQuantity(id: string): void {
    this.cartService.decreaseQuantity(id);
    this.renderCart();
  }
}
