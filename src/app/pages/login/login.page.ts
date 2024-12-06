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
import { PluginListenerHandle } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton]
})
export class LoginPage implements OnInit {
  appListener!: PluginListenerHandle;
  public mensajeError: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.validarSoporteBiometrico();
  }

  usarHuella() {
    this.autenticar().then(() => {
      this.router.navigate(['/tab1/tab1']);
    }).catch((error) => {
      this.mensajeError = "Ocurrio un error al autenticar";
    });
  }

  isInfoBiometricaDisponible(info: CheckBiometryResult): boolean {
    return info.isAvailable;
  }

  async validarSoporteBiometrico() {
    this.isInfoBiometricaDisponible(await BiometricAuth.checkBiometry());

    try {
      this.appListener = await BiometricAuth.addResumeListener(this.isInfoBiometricaDisponible);
    } catch (error) {
      console.log(error);
    }
  }

  async autenticar(): Promise<void> {
    try {
      await BiometricAuth.authenticate({
        reason: 'Autenticarse',
        cancelTitle: 'Cancelar',
        allowDeviceCredential: true,
        iosFallbackTitle: 'Use passcode',
        androidTitle: 'Login biometrico',
        androidSubtitle: 'Ingresa usando autenticacion biometrica',
        androidConfirmationRequired: false,
        androidBiometryStrength: AndroidBiometryStrength.weak,
      })
    } catch (error) {
      if (error instanceof BiometryError) {
        throw error;
      }
    }
  }


}
