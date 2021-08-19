import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CATEGORIES, PRODUCTS } from 'server/db-data';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/product';

import { ProductsService } from './products.service';

xdescribe('ProductsService', () => {
  let service: ProductsService;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch categories', () => {
    service.getCategories().subscribe((categories: ICategory[]) => {
      expect(categories).toBeTruthy();
      expect(categories.length).toBe(6);
      let category = categories.find(
        (el) => el.id === '5b675e5e5936635728f9fc30'
      );
      expect(category).toBeTruthy();
    });
    const req = httpCtrl.expectOne('categories');
    expect(req.request.method).toBe('GET');
    req.flush(CATEGORIES);
  });

  it('should fetch products', () => {
    service.getProducts().subscribe((products: IProduct[]) => {
      expect(products).toBeTruthy();
      expect(products.length).toBe(6);
      let product = products.find((el) => el.id === '5b6c6a7f01a7c38429530883');
      expect(product).toBeTruthy();
    });
    const req = httpCtrl.expectOne('products');
    expect(req.request.method).toBe('GET');
    req.flush(PRODUCTS);
  });

  afterEach(() => {
    httpCtrl.verify();
  });
});
