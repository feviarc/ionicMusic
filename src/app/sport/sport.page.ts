import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Plugins, CallbackID } from '@capacitor/core';


@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})


export class SportPage {

  defaultZoom: number;
  lastLocation: number;
  locationsHistory: any[];
  watchId: CallbackID;


  constructor(private navCtrl: NavController) {
    this.defaultZoom = 17;
    this.lastLocation = 0;
    this.locationsHistory = [];
  }


  ionViewDidEnter() {
    this.watchId = Plugins.Geolocation.watchPosition({},
    (position, err) => {
      try {
        if (this.locationsHistory.length === 0) {
          this.locationsHistory.push({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            timestamp: position.timestamp
          });
        } else {
          const isNewLatitude = position.coords.latitude !== this.locationsHistory[this.lastLocation].lat ? true : false;
          const isNewLongitude = position.coords.longitude !== this.locationsHistory[this.lastLocation].lng ? true : false;
          if (isNewLatitude && isNewLongitude) {
            this.locationsHistory.push({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              timestamp: position.timestamp
            });
          }
        }
        this.lastLocation = this.locationsHistory.length - 1;
      } catch (e) {
        console.log('e', e);
        console.log('err', err);
      }
    });
  }


  close() {
    if (this.watchId !== null) {
      Plugins.Geolocation.clearWatch({id: this.watchId});
    }
    this.navCtrl.navigateBack('menu');
  }

}
