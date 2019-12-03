import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MusicService } from '../services/music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage {

  albums: any[];
  artists: any[];
  slideOpts: any;
  song: any;
  songs: any[];


  constructor(
    private modalController: ModalController,
    private router: Router,
    private storage: Storage,
    private musicService: MusicService
  ) {
    this.artists = [];
    this.albums = [];
    this.song = {};
    this.songs = [];

    this.slideOpts = {
      initialSlide: 2,
      slidesPerView: 4,
      centeredSlides: true,
      speed: 300
    };
  }


  ionViewDidEnter() {
    this.musicService.getNewReleases().then(
      (newReleases) => {

        this.artists = this.musicService.getArtists();
        console.log(this.artists);

        this.songs = newReleases.albums.items.filter(
          (e) => {
            return e.album_type === 'single';
          }
        );

        this.albums = newReleases.albums.items.filter(
          (e) => {
            return e.album_type === 'album';
          }
        );
      }
    );
  }


  async showSongs(artist) {
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        artistName: artist.name,
        artistId: artist.id
      }
    });

    modal.onDidDismiss().then(
      (selectedSong) => {
        this.song = selectedSong.data;
      }
    );

    return await modal.present();
  }

}
