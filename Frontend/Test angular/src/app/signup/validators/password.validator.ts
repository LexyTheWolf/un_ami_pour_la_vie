import { FormControl, FormGroup, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class ParentErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = !!(form && form.submitted);
    const controlTouched = !!(control && (control.dirty || control.touched));
    const controlInvalid = !!(control && control.valid);
    const parentInvalid = !!(control && control.parent && control.parent.invalid &&
                            (control.parent.dirty || control.parent.touched));
    return isSubmitted || (controlTouched && (controlInvalid || parentInvalid));

  }
}
export class PasswordValidator {
  // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
  static areEqual(formGroup: FormGroup) {
    let value;
    let valid = true;
    for (const key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        const control: FormControl = <FormControl>formGroup.controls[key];

        if (value === undefined) {
          value = control.value;

        } else {
          if (value !== control.value) {
          console.log('vide ');
            valid = false;
            break;

          } else {
            valid = true;
          }
        }
      }
    }

    if (valid) {
      return null;
    }

    
    return {
      areEqual: true
    };
  }
}
