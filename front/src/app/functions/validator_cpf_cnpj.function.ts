import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isValidCPF } from './validator_cpf.function';
import { isValidCNPJ } from './validator_cnpj.function';

export function cpfCnpjValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.length === 11 && isValidCPF(value)) {
        return null;
      }

      if (value.length === 14 && isValidCNPJ(value)) {
        return null;
      }

    return { invalidTaxID: true };
  };
}
