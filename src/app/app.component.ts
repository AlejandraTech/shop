import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Verificar si hay un usuario autenticado en localStorage al inicializar el componente
    const user = localStorage.getItem('user');
    if (user) {
      this.authService.setAuthenticated(true);
    }

    // Suscribirse a los cambios en el estado de autenticación
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  // Cerrar sesión
  logout() {
    this.authService.setAuthenticated(false);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
