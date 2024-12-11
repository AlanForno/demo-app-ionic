import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import { GeolocalizacionComponent } from '../../components/geolocalizacion/geolocalizacion.component';
import {SwipeDirective} from "../../directives/swipe.directive";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [GeolocalizacionComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SwipeDirective]
})
export class Tab3Page {

  constructor(private router: Router) { }

  onSwipeUp() {
    this.router.navigate(['suscripcion']);
  }

  onSwipeDown() {
    this.router.navigate(['rescate']);
  }

}
