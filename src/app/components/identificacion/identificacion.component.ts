import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  // Declaración de variables de clase
  identificacionForm!: FormGroup;
  submitted = false;
  errorMessage: string | null = null;
  isValidForm = false;

  // Constructor del componente
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  // Método ejecutado al inicializar el componente
  ngOnInit(): void {
    // Creación del formulario con sus campos y validadores
    this.identificacionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required, Validators.minLength(9)]]
    });

    // Suscribe los cambios en el formulario para actualizar su validez
    this.identificacionForm.valueChanges.subscribe(() => {
      this.isValidForm = this.identificacionForm.valid;
    });
  }

  // Método para acceder a los controles del formulario de manera más fácil
  get formControls() { return this.identificacionForm.controls; }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    this.submitted = true;
    if (this.identificacionForm.invalid) { // Se verifica si el formulario es inválido
      return; // Si el formulario es inválido no se envía
    }
    // Si el formulario es correcto se obtienen los valores de los campos del formulario
    const email = this.identificacionForm.value.email;
    const dni = this.identificacionForm.value.dni;

    // Validar las credenciales
    this.authService.validateCredentials(email, dni).subscribe(valid => {
      if (valid) { // Si las credenciales son válidas se almacena el usuario en la local storage y se actualiza el servicio
        localStorage.setItem('user', email);
        this.authService.setAuthenticated(true);
        this.router.navigate(['/']);
      } else { // Si las credenciales son inválidas se establece un mensaje de error
        this.errorMessage = 'Credencials incorrectes';
      }
    });
  }

  // Método para ir a la página de inicio
  goBack() {
    this.router.navigate(['/']);
  }
}
