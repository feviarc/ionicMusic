import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from '@angular/router';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  async canActivate() {
    const isUserLoggedIn = await this.storage.get('isUserLoggedIn');
    if (isUserLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}
