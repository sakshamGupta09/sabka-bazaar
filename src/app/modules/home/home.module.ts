import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { BannersComponent } from './components/banners/banners.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';

import { HomeService } from './services/home.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [BannersComponent, CategoriesComponent, HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule,IvyCarouselModule],
  providers: [HomeService],
})
export class HomeModule {}
