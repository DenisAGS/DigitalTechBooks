import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { AcercaLandingComponent } from './acerca-landing/acerca-landing.component';
import { CatalogoLandingComponent } from './catalogo-landing/catalogo-landing.component';
import { LandingComponent } from './landing/landing.component';
import { ServiciosLandingComponent } from './servicios-landing/servicios-landing.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLandingComponent,
    FooterLandingComponent,
    AcercaLandingComponent,
    CatalogoLandingComponent,
    LandingComponent,
    ServiciosLandingComponent,
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
