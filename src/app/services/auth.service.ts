import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private storage: Storage) { }

  login(credentials) {
    return new Promise(
      (accept, reject) => {
        this.storage.get('user')
        .then(
          (data) => {
            console.log('data:', data);
            if (credentials.email === data.email && btoa(credentials.password) === data.password) {
              accept('Login Successful');
            } else {
              reject('Email or password does not match');
            }
          }
        )
        .catch(
          () => {
            reject('User info not found');
          }
        );
      }
    );
  }


  registerUser(userData) {
    return this.storage.set('user', userData);
  }

}
