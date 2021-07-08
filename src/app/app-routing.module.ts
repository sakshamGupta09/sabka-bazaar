import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingService } from './services/preloading.service';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app/home',
  },
  {
    path: '**',
    redirectTo: '/app/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadingService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
