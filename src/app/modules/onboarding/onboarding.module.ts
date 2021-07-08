import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { OnboardingService } from './services/onboarding.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [OnboardingService],
})
export class OnboardingModule {}
