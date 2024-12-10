import {Component} from '@angular/core';
import {BarcodeFormat, BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import {Router} from "@angular/router";
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
  standalone: true,
  imports: [IonButton]
})
export class ScannerComponent {

  constructor(private router: Router) { 

  }

  async abrirScanner() {
    BarcodeScanner.installGoogleBarcodeScannerModule().then(e => {
        console.log("Modulo BarcodeScanner instalado");
    }).catch(error => {
      console.log(error)
    });

    BarcodeScanner.scan({
      formats: [BarcodeFormat.QrCode]
    }).then(e => {
      if (e.barcodes[0].valueType === "URL") {
        const url = e.barcodes[0].displayValue;
        window.open(url, "_blank");
      }
    }).catch(err => {
      console.log(err);
    })
  }

}
