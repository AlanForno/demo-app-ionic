import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonGrid, IonRow, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/angular/standalone';
import {
  CheckBiometryResult,
  AndroidBiometryStrength,
  BiometryError,
  BiometryErrorType,
  BiometricAuth,
} from '@aparajita/capacitor-biometric-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usarHuella() {

  }

  async authenticate(): Promise<void> {
    try {
      await BiometricAuth.authenticate({
        reason: 'Please authenticate',
        cancelTitle: 'Cancel',
        allowDeviceCredential: true,
        iosFallbackTitle: 'Use passcode',
        androidTitle: 'Biometric login',
        androidSubtitle: 'Log in using biometric authentication',
        androidConfirmationRequired: false,
        androidBiometryStrength: AndroidBiometryStrength.weak,
      })
    } catch (error) {
      if (error instanceof BiometryError) {
        if (error.code !== BiometryErrorType.userCancel) {
          
        }
      }
    }
  }


}
