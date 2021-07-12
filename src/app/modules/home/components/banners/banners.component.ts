import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IBanner } from '../../model/model';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannersComponent implements OnInit {
  @Input() banners: IBanner[];
  constructor() {}

  ngOnInit(): void {}
  bannerTracker(index: number, row: IBanner): string {
    return row.id;
  }
}
