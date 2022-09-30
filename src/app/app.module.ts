import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { LoginComponent } from './modales/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { Seccion3Component } from './seccion3/seccion3.component';
import { Seccion4Component } from './seccion4/seccion4.component';
import { Seccion5Component } from './seccion5/seccion5.component';
import { DashboardComponent } from './edicion/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { BottonloginComponent } from './bottonlogin/bottonlogin.component';
import { BottonlogoutComponent } from './bottonlogout/bottonlogout.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { SobremieditComponent } from './edicion/sobremiedit/sobremiedit/sobremiedit.component';
import { SeccioneditComponent } from './edicion/seccionedit/seccionedit.component';
import { ModeditsobremiComponent } from './edicion/modeditsobremi/modeditsobremi.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SobremiComponent,
    LoginComponent,
    RedesComponent,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component,
    Seccion5Component,
    DashboardComponent,
    ErrorComponent,
    IntroComponent,
    BottonloginComponent,
    BottonlogoutComponent,
    NavbardashboardComponent,
    SobremieditComponent,
    SeccioneditComponent,
    ModeditsobremiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
