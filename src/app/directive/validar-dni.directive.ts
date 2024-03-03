import { Directive } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidarDni]'
})
export class ValidarDniDirective {

  // Método de validación que implementa la lógica para validar un campo DNI
  validate(control: FormControl): ValidationErrors | null {
    const dni = control.value; // Obtener el valor del campo de control

    if (!dni) {
      return null; // No se hace la validación si el campo está vacío
    }

    const expresionRegularDNI = /^\d{8}[a-zA-Z]$/;
    if (!expresionRegularDNI.test(dni)) {
      return { 'dniInvalido': true }; // Retorna un error si el formato del DNI es inválido
    }

    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const numeroDNI = dni.substr(0, dni.length - 1);
    const letraDNI = dni.substr(dni.length - 1).toUpperCase();
    const letraCalculada = letras[numeroDNI % 23];

    if (letraDNI !== letraCalculada) {
      return { 'dniInvalido': true };
    }

    return null; // Si la validación es exitosa, retorna null (DNI válido)
  }

}
