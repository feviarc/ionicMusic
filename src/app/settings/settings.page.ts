import { Component, OnInit } from '@angular/core';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

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


  constructor(private sanitizer: DomSanitizer) {
    this.defaultPicture = 'assets/img/default-picture.jpg';
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
