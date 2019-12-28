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


  async getArtistTopTracks(artistId: any) {
    console.log('MusicService.getArtistTopTracks(' + artistId + ')');
    const response = await fetch(`https://platzi-music-api.now.sh/artists/${artistId}/top-tracks?country=MX`);
    return response.json();
  }


  async getNewReleases() {
    const response = await fetch('https://platzi-music-api.now.sh/browse/new-releases');
    return response.json();
  }

}
