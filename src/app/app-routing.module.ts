import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingService } from './services/preloading.service';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadingService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
