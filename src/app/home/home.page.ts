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
  currentSong: HTMLAudioElement;
  elapsedTime: number;
  isSongPlaying: boolean;
  slideOpts: any;
  song: any;
  songs: any[];


  constructor(
    private modalController: ModalController,
    private router: Router,
    private storage: Storage,
    private musicService: MusicService
  ) {
    this.albums = [];
    this.artists = [];
    this.song = {};
    this.songs = [];

    this.slideOpts = {
      initialSlide: 2,
      slidesPerView: 4,
      centeredSlides: true,
      speed: 350
    };

    this.currentSong = new Audio();

    this.currentSong.addEventListener('ended',
      () => {
        this.isSongPlaying = false;
      }
    );

    this.currentSong.addEventListener('timeupdate',
      () => {
        this.elapsedTime = (1 / this.currentSong.duration) * this.currentSong.currentTime;
        console.log(this.currentSong.currentTime);
      }
    );
  }


  ionViewDidEnter() {
    this.musicService.getNewReleases().then(
      (newReleases) => {

        this.artists = this.musicService.getArtists();

        this.albums = newReleases.albums.items.filter(
          (e) => {
            return e.album_type === 'album';
          }
        );

        this.songs = newReleases.albums.items.filter(
          (e) => {
            return e.album_type === 'single';
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

    modal.onDidDismiss()
    .then(
      (selectedSong) => {
        if (selectedSong.data) {
          this.song = selectedSong.data;
          this.currentSong.src = this.song.preview_url;
          this.currentSong.play();
          this.isSongPlaying = true;
        }
      }
    );

    return await modal.present();
  }


  parseTime(timeInSeconds) {
    let minutes;
    let seconds;

    if (timeInSeconds) {
      minutes = Math.floor(timeInSeconds / 60).toString();
      minutes = minutes.length === 1 ? '0' + minutes : minutes;
      seconds =  parseInt((timeInSeconds % 60).toString(), 10).toString();
      seconds = seconds.length === 1 ? '0' + seconds : seconds;
    } else {
      minutes = '00';
      seconds = '00';
    }

    return `${minutes}:${seconds}`;
  }


  pause() {
    this.currentSong.pause();
    this.isSongPlaying = false;
  }


  play() {
    this.currentSong.play();
    this.isSongPlaying = true;
  }

}
