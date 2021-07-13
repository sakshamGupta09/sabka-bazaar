import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { IBanner } from '../../model/model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  banners: IBanner[] = [];
  categories: ICategory[] = [];

  constructor(private service: HomeService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getBanners();
    this.getCategories();
  }

  getBanners(): void {
    this.service.getBanners().subscribe((res) => {
      this.banners = res.map((el) => ({ ...el, path: el.bannerImageUrl }));
      this.detectChanges();
    });
  }
  getCategories(): void {
    this.service.getCategories().subscribe((res) => {
      this.categories = res.filter((el) => el.enabled);
      this.detectChanges();
    });
  }
  detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
