import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Servicios/profile.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  miPortfolio:any;

  constructor(private datosProfile:ProfileService) { }

  ngOnInit(): void {
    this.datosProfile.obtenerDatos().subscribe(data => {console.log(data); this.miPortfolio=data;});
  }

}
