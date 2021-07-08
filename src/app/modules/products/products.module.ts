import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  declarations: [ProductsComponent, CategoriesComponent, BaseComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}
