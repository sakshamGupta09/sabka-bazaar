import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { CartService } from 'src/app/store/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  @Input() products: IProduct[];
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
  productTracker(index: number, row: IProduct): string {
    return row.id;
  }
  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }
}
