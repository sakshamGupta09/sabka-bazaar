import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/store/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    console.log(this.cartService.getCart());
  }
}
