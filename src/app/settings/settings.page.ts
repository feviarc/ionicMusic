import { Component } from '@angular/core';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import { NavController } from '@ionic/angular';

import {
  CameraResultType,
  CameraSource,
  Plugins
} from '@capacitor/core';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})


export class SettingsPage {

  defaultPicture: string;
  picture: SafeResourceUrl;


  constructor(
    private sanitizer: DomSanitizer,
    private navCtrl: NavController
  ) {
    this.defaultPicture = 'assets/img/default-picture.jpg';
  }


  close() {
    this.navCtrl.navigateBack('menu');
  }


  async takePicture() {
    const cameraOptios = {
      allowEditing: false,
      quality: 100,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    };

    const picture = await Plugins.Camera.getPhoto(cameraOptios);

    this.picture = this.sanitizer.bypassSecurityTrustResourceUrl(picture && picture.dataUrl);

    console.log(picture);
  }

}
