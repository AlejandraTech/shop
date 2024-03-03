import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Lista de usuarios registrados en la aplicación
  users: User[] = [
    new User('usuario1@example.com', '123456789'),
    new User('usuario2@example.com', '123456789'),
    new User('usuario3@example.com', '123456789'),
    new User('usuario4@example.com', '123456789'),
    new User('usuario5@example.com', '123456789'),
    new User('usuario6@example.com', '123456789'),
    new User('usuario7@example.com', '123456789'),
    new User('usuario8@example.com', '123456789'),
    new User('usuario9@example.com', '123456789'),
    new User('usuario10@example.com', '123456789')
  ];

  constructor() { }

  // Método para validar las credenciales del usuario al iniciar sesión
  validateCredentials(email: string, dni: string): Observable<boolean> {
    let isAuthenticated: boolean = false;

    for (const user of this.users) {
      if (user.getEmail() === email && user.getDni() === dni) {
        isAuthenticated = true;
        break;
      }
    }

    return of(isAuthenticated);
  }

  // BehaviorSubject que almacena el estado de autenticación actual
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  // Se emite el estado de autenticación actual
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Método para establecer el estado de autenticación
  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  // Método para obtener el estado de autenticación actual
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

}
