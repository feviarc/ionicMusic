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
  watchOptions: any;


  constructor(private navCtrl: NavController) {
    this.defaultZoom = 17;
    this.locationsHistory = [];
    this.watchOptions = {timeout: 30000};

    this.watchId = Plugins.Geolocation.watchPosition(this.watchOptions,
      (position, err) => {
        try {
          if (this.locationsHistory.length === 0) {
            this.locationsHistory.push({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              timestamp: position.timestamp
            });
          } else {
            const digits = 4;

            const lat1 = position.coords.latitude.toFixed(digits);
            const lng1 = position.coords.longitude.toFixed(digits);

            const lat2 = this.locationsHistory[this.lastLocation].lat.toFixed(digits);
            const lng2 = this.locationsHistory[this.lastLocation].lng.toFixed(digits);

            const latitudeChanged = lat1 !== lat2 ? true : false;
            const longitudeChanged = lng1 !== lng2 ? true : false;

            if (latitudeChanged && longitudeChanged) {
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
          console.log('err', err.message);
        }
      }
    );
  }


  close() {
    if (this.watchId !== null) {
      Plugins.Geolocation.clearWatch({id: this.watchId});
    }
    this.navCtrl.navigateBack('menu');
  }

}
