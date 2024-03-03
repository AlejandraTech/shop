export class User {
  private email: string;
  private dni: string;

  // Constructor que recibe el correo electrónico y el DNI del usuario
  constructor(email: string, dni: string) {
    this.email = email;
    this.dni = dni;
  }

  // Método para obtener el correo electrónico del usuario
  getEmail(): string {
    return this.email;
  }

  // Método para obtener el DNI del usuario
  getDni(): string {
    return this.dni;
  }
}
