import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from 'src/app/constants/regex';
import { FormsService } from 'src/app/services/forms.service';
import { CustomValidators } from 'src/app/validators/validators';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: OnboardingService,
    private formService: FormsService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.signupForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        auth: this.fb.group(
          {
            password: [
              '',
              [Validators.required, Validators.pattern(Regex.STRONG_PASSWORD)],
            ],
            confirmPassword: [
              '',
              [Validators.required, Validators.pattern(Regex.STRONG_PASSWORD)],
            ],
          },
          {
            validators: CustomValidators.matchPasswords,
          }
        ),
      },
      {
        updateOn: 'blur',
      }
    );
  }
  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.formService.markAllTouched(this.signupForm);
      return;
    }
  }
}
