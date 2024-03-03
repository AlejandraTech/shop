// Importaciones necesarias para definir las rutas y el módulo de Angular.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importación de los componentes que se utilizarán como vistas en las rutas.
import { InicioComponent } from './components/inicio/inicio.component';
import { SubscripcionComponent } from './components/subscripcion/subscripcion.component';
import { IdentificacionComponent } from './components/identificacion/identificacion.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { QuisomComponent } from './components/quisom/quisom.component';
import { CistellaComponent } from './components/cistella/cistella.component';
import { AreaprivadaComponent } from './components/areaprivada/areaprivada.component';

// Definición de las rutas con sus respectivos componentes.
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'subscripcion', component: SubscripcionComponent },
  { path: 'identificacion', component: IdentificacionComponent },
  { path: 'quiosom', component: QuisomComponent },
  { path: 'colleccions', component: CollectionsComponent },
  { path: 'cistella', component: CistellaComponent },
  { path: 'areaprivada', component: AreaprivadaComponent },
  { path: '**', component: NotFoundComponent }
];

// Definición del módulo de rutas de la aplicación.
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importación de las rutas principales.
  exports: [RouterModule] // Exportación del módulo de rutas para que esté disponible en otros módulos.
})
export class AppRoutingModule { } // Definición de la clase del módulo de rutas.
