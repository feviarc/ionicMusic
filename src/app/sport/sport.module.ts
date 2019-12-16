import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';

import { SportPage } from './sport.page';


const routes: Routes = [
  {
    path: '',
    component: SportPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule
  ],
  declarations: [SportPage]
})


export class SportPageModule {}
