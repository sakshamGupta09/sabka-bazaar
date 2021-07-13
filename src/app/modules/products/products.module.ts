import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ProductsService } from './services/products.service';

const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  declarations: [ProductsComponent, CategoriesComponent, CatalogueComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule],
  providers: [ProductsService],
})
export class ProductsModule {}
