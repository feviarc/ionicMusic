import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { MusicService } from '../services/music.service';


@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})


export class SongsModalPage {

  artistName: any;
  artistId: any;
  songs: any;


  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private musicService: MusicService
  ) {
    this.songs = {};
    this.artistName = this.navParams.data.artistName;
    this.artistId = this.navParams.data.artistId;
  }


  ionViewDidEnter() {

    this.musicService.getArtistTopTracks(this.artistId)
    .then(
      (responseData) => {
        this.songs = responseData;
      }
    )
    .catch(
      (responseError) => {
        console.log('[[[ responseError ]]]', responseError);
      }
    );
  }


  async selectSong(song) {
    await this.modalController.dismiss(song);
  }

}
