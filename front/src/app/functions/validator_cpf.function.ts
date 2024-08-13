export function isValidCPF(cpf: string): boolean {
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    const aux = parseInt(cpf.charAt(i));
    sum += aux * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(cpf.charAt(9))) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  return remainder === parseInt(cpf.charAt(10)) && !cpf.split('').every(char => char === cpf[0]);
}
