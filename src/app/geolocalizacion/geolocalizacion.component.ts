import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Geolocation, Position } from '@capacitor/geolocation';
import { IonGrid, IonRow, IonButton } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css'],
  standalone: true,
  imports: [IonGrid, IonRow, IonButton, CommonModule]
})
export class GeolocalizacionComponent  implements OnInit {
  public posicion!: Position;
  public map!: L.Map;
  public pinMarcador!: L.Marker;
  public direccion: any;

  constructor() { }

  ngOnInit() {}

  async obtenerUbicacion() {
    const position = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    });
    const { latitude, longitude } = position.coords;
    
    this.map = L.map('map').setView([latitude, longitude], 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      
    }).addTo(this.map);
    this.pinMarcador = L.marker([latitude, longitude]).addTo(this.map);

    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.direccion = data.address;
      })
      .catch(error => {
        console.error('Error al obtener el nombre de la calle:', error);
      });
  }

  
}
