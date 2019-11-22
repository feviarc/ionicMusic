import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage {

  constructor(
    private router: Router,
    private storage: Storage
  ) { }


  logout() {
    this.storage.set('isUserLoggedIn', false).then(
      () => {
        this.router.navigateByUrl('/login');
      }
    );
  }


  openIntro() {
    this.storage.set('isIntroTurnOff', false).then(
      () => {
        this.router.navigateByUrl('/intro');
      }
    );
  }

}
