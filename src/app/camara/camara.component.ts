import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonButton, IonIcon, IonGrid, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css'],
  standalone: true,
  imports: [IonGrid, IonRow, IonButton, IonIcon]
})
export class CamaraComponent {
  public imageSrc: string | undefined = "";

  constructor() {
    addIcons({ camera});
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    this.imageSrc = image.webPath;
  }

}
