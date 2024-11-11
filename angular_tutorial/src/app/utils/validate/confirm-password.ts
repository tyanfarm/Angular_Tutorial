import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmPasswordValidator(password: string, confirmPassword: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return password && confirmPassword && password !== confirmPassword
            ? { confirmPassword: { value: control.value } }
            : null;
    };
}