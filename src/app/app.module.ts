import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SubscripcionComponent } from './components/subscripcion/subscripcion.component';
import { IdentificacionComponent } from './components/identificacion/identificacion.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidarDniDirective } from './directive/validar-dni.directive';
import { CollectionsComponent } from './components/collections/collections.component';
import { QuisomComponent } from './components/quisom/quisom.component';
import { CistellaComponent } from './components/cistella/cistella.component';
import { AreaprivadaComponent } from './components/areaprivada/areaprivada.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SubscripcionComponent,
    IdentificacionComponent,
    NotFoundComponent,
    ValidarDniDirective,
    CollectionsComponent,
    QuisomComponent,
    CistellaComponent,
    AreaprivadaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
