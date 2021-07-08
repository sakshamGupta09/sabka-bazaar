import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'onboarding',
        loadChildren: () =>
          import('../onboarding/onboarding.module').then(
            (m) => m.OnboardingModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('../cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes), MatIconModule],
})
export class LayoutModule {}
