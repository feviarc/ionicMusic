import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import {
  slidesCoverflow,
  slidesCube,
  slidesFlip
} from './slides-animations';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})


export class IntroPage {

  slides: any;
  slideOpts: any;

  constructor(private router: Router, private storage: Storage) {
    // this.slideOpts = slidesCoverflow;
    // this.slideOpts = slidesFlip;
    this.slideOpts = slidesCube;

    this.slides = [
      {
        title: 'Listen your favorite music',
        description: 'Los mejores álbums y canciones. Escucha y comparte en cualquier momento a todas horas.',
        icon: 'play'
      },
      {
        title: 'Listen your favorite music',
        description: 'Los mejores álbums y canciones. Escucha y comparte en cualquier momento a todas horas.',
        icon: 'at'
      },
      {
        title: 'Listen your favorite music',
        description: 'Los mejores álbums y canciones. Escucha y comparte en cualquier momento a todas horas.',
        icon: 'globe'
      },
      {
        title: 'Listen your favorite music',
        description: 'Los mejores álbums y canciones. Escucha y comparte en cualquier momento a todas horas.',
        icon: 'cloud-download'
      }
    ];
  }


  closeIntro() {
    this.storage.set('isIntroTurnOff', true).then(
      () => {
        this.router.navigateByUrl('/menu/home');
      }
    );
  }

}
