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
        this.navCtrl.navigateRoot('/intro');
      }
    );
  }


  settings() {
    this.navCtrl.navigateRoot('menu/settings').then(
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


  sport() {
    this.closeMenu();
    this.navCtrl.navigateRoot('menu/sport');
  }

}
