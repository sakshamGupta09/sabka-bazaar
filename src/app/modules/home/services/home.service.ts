import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getBanners(): Observable<any> {
    return this.http.get('banners');
  }
  getCategories(): Observable<any> {
    return this.http.get('categories');
  }
}
