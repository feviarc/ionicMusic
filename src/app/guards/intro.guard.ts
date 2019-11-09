import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from '@angular/router';

import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})


export class IntroGuard implements CanActivate {

  constructor(private router: Router, private storage: Storage) { }

  async canActivate() {
    const isIntroTurnOff = await this.storage.get('isIntroTurnOff');
    if (isIntroTurnOff) {
      return true;
    } else {
      this.router.navigateByUrl('/intro');
    }
  }

}
