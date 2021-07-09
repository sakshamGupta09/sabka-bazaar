import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor() {}

  markAllTouched(form: FormGroup) {
    let controls = form.controls;
    for (let key in controls) {
      let val = controls[key];
      if (val instanceof FormControl) {
        val.markAsTouched({ onlySelf: true });
        val.markAsDirty({ onlySelf: true });
      } else if (val instanceof FormGroup) {
        this.markAllTouched(val);
      }
    }
  }
}
