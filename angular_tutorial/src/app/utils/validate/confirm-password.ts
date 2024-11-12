import { AbstractControl } from "@angular/forms";

export function passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value === control.get('confirmPassword')?.value ? null : { passwordMatch: true };
}