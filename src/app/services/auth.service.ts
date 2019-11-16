import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor() { }

  login(credentials) {
    return new Promise(
      (accept, reject) => {
        if (credentials.email === 'user@oitsys.com' && credentials.password === 'abc12345') {
          accept('Login Successful');
        }
        else {
          reject('Login Fail');
        }
      }
    );
  }

}
