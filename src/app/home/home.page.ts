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


  openIntro() {
    this.storage.set('isIntroTurnOff', false);
    this.router.navigateByUrl('/intro');
  }

}
