import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { LoginComponent } from './modales/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { DashboardComponent } from './edicion/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { BottonloginComponent } from './bottonlogin/bottonlogin.component';
import { BottonlogoutComponent } from './bottonlogout/bottonlogout.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { SobremieditComponent } from './edicion/sobremiedit/sobremiedit/sobremiedit.component';
import { SeccioneditComponent } from './edicion/seccionedit/seccionedit.component';
import { ModeditsobremiComponent } from './edicion/modeditsobremi/modeditsobremi.component';
import { ModeditfotoComponent } from './edicion/modeditfoto/modeditfoto.component';
import { BotonesedicionComponent } from './edicion/botonesedicion/botonesedicion.component';
import { SecedueditComponent } from './edicion/seceduedit/seceduedit.component';
import { SechabeditComponent } from './edicion/sechabedit/sechabedit.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SecproeditComponent } from './edicion/secproedit/secproedit.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { BotonagregarComponent } from './edicion/botonagregar/botonagregar.component';
import { ModaddlabComponent } from './edicion/modaddlab/modaddlab.component';
import { HttpClientModule } from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SobremiComponent,
    LoginComponent,
    RedesComponent,
    DashboardComponent,
    ErrorComponent,
    IntroComponent,
    BottonloginComponent,
    BottonlogoutComponent,
    NavbardashboardComponent,
    SobremieditComponent,
    SeccioneditComponent,
    ModeditsobremiComponent,
    ModeditfotoComponent,
    BotonesedicionComponent,
    SecedueditComponent,
    SechabeditComponent,
    ProyectosComponent,
    SecproeditComponent,
    HabilidadesComponent,
    TrabajosComponent,
    EstudiosComponent,
    BotonagregarComponent,
    ModaddlabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
