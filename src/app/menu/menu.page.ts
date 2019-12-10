import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})


export class MenuPage {

  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }


  closeMenu() {
    this.menuCtrl.close();
  }


  logout() {
    this.storage.set('isUserLoggedIn', false).then(
      () => {
        this.navCtrl.navigateRoot('/login');
      }
    );
  }


  openIntro() {
    this.storage.set('isIntroTurnOff', false).then(
      () => {
        this.closeMenu();
        this.navCtrl.navigateForward('/intro');
      }
    );
  }


  settings() {
    this.navCtrl.navigateForward('menu/settings').then(
      () => {
        this.closeMenu();
      }
    );
  }


  home() {
    this.navCtrl.navigateRoot('menu/home').then(
      () => {
        this.closeMenu();
      }
    );
  }


  sportMode() {
    this.closeMenu();
    this.navCtrl.navigateForward('menu/sport');
  }

}
