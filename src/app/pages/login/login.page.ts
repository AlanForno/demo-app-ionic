import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonGrid, IonRow, IonCol, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/angular/standalone';
import {
  CheckBiometryResult,
  AndroidBiometryStrength,
  BiometryError,
  BiometryErrorType,
  BiometricAuth,
} from '@aparajita/capacitor-biometric-auth';
import { PluginListenerHandle } from '@capacitor/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton]
})
export class LoginPage implements OnInit {
  appListener!: PluginListenerHandle;
  public mensajeError: any;
  public toastAbierto: boolean = false;
  usuario: string | undefined = "";
  password: string | undefined = "";

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.validarSoporteBiometrico();
  }

  async ingresar(usuarioInput: any, passwordInput: any) {
    const usuario = (await usuarioInput.getInputElement()).value;
    const password = (await passwordInput.getInputElement()).value;

    try {
      await this.loginService.login(usuario, password);
      this.router.navigate(['/tab1/tab1']);
    } catch(error) {
      this.mensajeError = "Usuario o contraseña incorrectos";
      this.setOpen(true);
      console.log(error);
    }

  }

  async registrarse(usuarioInput: any, passwordInput: any) {
    const usuario = (await usuarioInput.getInputElement()).value;
    const password = (await passwordInput.getInputElement()).value;

    this.loginService.register(usuario, password);
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

  setOpen(estaAbierto: boolean) {
    this.toastAbierto = estaAbierto;
  }


}
