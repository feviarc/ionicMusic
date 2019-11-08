import { Component } from '@angular/core';
import { slidesCoverflow, slidesCube, slidesFlip } from './slides-animations';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage {
  slides: any;
  slideOpts: any;

  constructor() {

    // this.slideOpts = slidesCoverflow;
    this.slideOpts = slidesCube;
    // this.slideOpts = slidesFlip;

    this.slides = [
      {
        title: 'Listen your favorite music',
        description:
          'Los mejores álbums y canciones. Escucha y comparte en cualquier momento a todas horas.',
        icon: 'play'
      },
      {
        title: 'Listen your favorite music',
        description:
          'Los mejores álbums y canciones. Escucha y comparte en cualquier momento a todas horas.',
        icon: 'play'
      },
      {
        title: 'Listen your favorite music',
        description:
          'Los mejores álbums y canciones. Escucha y comparte en cualquier momento a todas horas.',
        icon: 'play'
      },
      {
        title: 'Listen your favorite music',
        description:
          'Los mejores álbums y canciones. Escucha y comparte en cualquier momento a todas horas.',
        icon: 'play'
      }
    ];
  }
}
