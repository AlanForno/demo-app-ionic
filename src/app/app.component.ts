import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [MenuComponent, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
