import { Injectable } from '@angular/core';
import * as dataArtists from './artists.json';


@Injectable({
  providedIn: 'root'
})


export class MusicService {

  constructor() { }


  getArtists() {
    return dataArtists.items;
  }


  getArtistTopTracks(artistId) {
    console.log(artistId);
    return fetch(`https://platzi-music-api.now.sh/artists/${artistId}/top-tracks?country=MX`)
    .then(
      (response) => {
        return response.json();
      }
    );
  }


  getNewReleases() {
    return fetch('https://platzi-music-api.now.sh/browse/new-releases').then(
      (response) => {
        return response.json();
      }
    );
  }

}
