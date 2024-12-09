import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  app: FirebaseApp;

  constructor() {
    this.app = initializeApp(environment.firebase);
  }

  async login(email: string, password: string): Promise<void> {
    const auth = getAuth();
    
    try {
      const credenciales = await signInWithEmailAndPassword(auth, email, password);
      const user = credenciales.user;
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string): Promise<void> {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

}
