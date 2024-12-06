import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import {
  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonList, IonItem, IonLabel,
  IonInput, IonButton, IonIcon,
  IonGrid, IonRow
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.css'],
  standalone: true,
  imports: [
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonList, IonItem, IonLabel, IonInput,
    IonButton, IonIcon,
    IonGrid, IonRow, CommonModule
  ]
})
export class ConsumoApiComponent implements OnInit {
  public allUsers: any[] = [];
  public users: any[] = [];
  public user: any;

  constructor(private servicio: ApiService) {
    addIcons({ addOutline })
  }

  ngOnInit() {
    this.servicio.getUsers().subscribe((data) => {
      this.allUsers = data;
      this.users = this.allUsers.slice(0, 3)
    });
  }

  obtenerPorId(event: Event) {
    const input = event.target as HTMLInputElement;
    this.user = this.allUsers.find(u => u.id === parseInt(input.value));
  }

}
