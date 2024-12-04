import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library, playCircle, apertureOutline, search } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon]
})
export class TabsComponent {

  constructor() { 
    addIcons({library, playCircle, apertureOutline, search});
  }

}
