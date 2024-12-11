import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption,
    IonTitle,
    IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-rescate',
  templateUrl: './rescate.page.html',
  styleUrls: ['./rescate.page.css'],
  standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonButtons, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption]
})
export class RescatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
