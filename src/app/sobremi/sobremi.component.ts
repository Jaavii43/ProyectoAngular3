import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Servicios/profile.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  //Variable de instancia para almacenar los datos
  miPortfolio:any;

  constructor(
    //inyectar el servicio para tener acceso en la clase a los metodos
    private datosProfile:ProfileService) { }

  // Esto es para almacenar en la variable instancia los datos recuperados por el servicio  
  ngOnInit(): void {
    this.datosProfile.obtenerDatos().subscribe(datos => {
      console.log(datos); 
      this.miPortfolio=datos;
    });
  }

}
