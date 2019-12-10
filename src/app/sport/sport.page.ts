import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})


export class SportPage {

  constructor(private navCtrl: NavController) { }


   close() {
    this.navCtrl.navigateBack('menu');
   }

}
