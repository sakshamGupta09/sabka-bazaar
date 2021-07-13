import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent implements OnInit {
  products: IProduct[];
  categories: ICategory[];
  categoryId: string;

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.fetchUrlParams();
  }
  fetchUrlParams(): void {
    this.categoryId = this.route.snapshot.queryParams.categoryId || null;
    this.getProducts();
  }
  getCategories(): void {
    this.service.getCategories().subscribe((res) => {
      this.categories = res.filter((el) => el.enabled);
      this.detectChanges();
    });
  }
  getProducts(): void {
    this.service.getProducts().subscribe((res) => {
      this.products = res;
      if (this.categoryId) {
        this.products = res.filter((el) => el.category === this.categoryId);
      }
      this.detectChanges();
    });
  }
  detectChanges(): void {
    this.cdref.detectChanges();
  }
}
