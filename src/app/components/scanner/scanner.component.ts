import {Component} from '@angular/core';
import {BarcodeFormat, BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import {Router} from "@angular/router";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
  standalone: true
})
export class ScannerComponent {

  constructor(private router: Router) { }

  async abrirScanner() {
    if(await !BarcodeScanner.isGoogleBarcodeScannerModuleAvailable())
      BarcodeScanner.installGoogleBarcodeScannerModule();

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
