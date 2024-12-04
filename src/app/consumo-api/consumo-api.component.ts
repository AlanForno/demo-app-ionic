import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonItem, IonLabel, IonInput, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.css'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonItem, IonLabel, IonInput, IonGrid, IonRow, CommonModule]
})
export class ConsumoApiComponent implements OnInit {
  public users: any[] = [];
  public usuario: any;

  constructor(private servicio: ApiService) { }

  ngOnInit() {
    this.servicio.getUsers().subscribe((data) => {
      this.users = data.slice(0, 3);
    });
  }

  obtenerPorId(event: Event) {
    const input = event.target as HTMLInputElement;
    this.usuario = this.users.find(u =>u.id === parseInt(input.value));
  }

}
