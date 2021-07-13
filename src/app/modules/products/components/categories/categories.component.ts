import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ICategory } from 'src/app/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  @Input() categories: ICategory[];
  @Output() onCategoryChange: EventEmitter<string>;
  @Input() currentCategoryId: string;
  constructor() {
    this.onCategoryChange = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  categoriesTracker(index: number, category: ICategory): string {
    return category.id;
  }
  onCategorySelect(id: string): void {
    if (this.currentCategoryId != id) {
      this.currentCategoryId = id;
      this.onCategoryChange.emit(id);
    } else {
      this.currentCategoryId = null;
      this.onCategoryChange.emit(null);
    }
  }
  categoryChangeHandler(event): void {
    this.onCategorySelect(event.target.value);
  }
}
