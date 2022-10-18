import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Servicios/profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private datosProfile:ProfileService) { }

  ngOnInit(): void {
    this.datosProfile.obtenerDatos();
  }

}
