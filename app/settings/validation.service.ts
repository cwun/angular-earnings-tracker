import { AbstractControl, ValidatorFn } from '@angular/forms';

export class ValidationService {
    static minValidator(min: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            const input = control.value;
            const isValid = input < min;
            return isValid ? {'min': {min}} : null;
        };
    }

    static maxValidator(max: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            const input = control.value;
            const isValid = input > max;
            return isValid ? {'max': {max}} : null;
        };
    }
}