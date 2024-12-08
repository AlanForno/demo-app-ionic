import {Component, OnInit} from '@angular/core';
import {
  IonList,
  IonItem,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton, IonButton, IonLabel
} from "@ionic/angular/standalone";
import {ScannerComponent} from "../scanner/scanner.component";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [IonList, IonItem, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonButton, IonLabel, ScannerComponent],
  standalone: true,
})
export class MenuComponent {

  constructor() {
  }


}
