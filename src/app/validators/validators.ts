import { FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  public static matchPasswords(group: FormGroup): ValidationErrors | null {
    const password = group.get('password').value;
    const confirm = group.get('confirmPassword').value;
    return password && confirm && password == confirm
      ? null
      : { notSame: true };
  }
}
