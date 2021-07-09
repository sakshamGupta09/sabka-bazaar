import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: OnboardingService,
    private formService: FormsService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      },
      {
        updateOn: 'blur',
      }
    );
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.formService.markAllTouched(this.loginForm);
      return;
    }
  }
}
