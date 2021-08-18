import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IBanner } from '../model/model';
import { BANNERS, CATEGORIES } from 'server/db-data';
import { ICategory } from 'src/app/models/category';

describe('HomeService', () => {
  let service: HomeService;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService],
    });
    service = TestBed.inject(HomeService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch banners', () => {
    service.getBanners().subscribe((banners: IBanner[]) => {
      expect(banners).toBeTruthy();
      expect(banners.length).toBe(5);
      let banner = banners.find((el) => el.id === '5b6c38156cb7d770b7010ccc');
      expect(banner).toBeTruthy();
    });
    const req = httpCtrl.expectOne('banners');
    expect(req.request.method).toBe('GET');
    req.flush(BANNERS);
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

  afterEach(() => {
    httpCtrl.verify();
  });
});
