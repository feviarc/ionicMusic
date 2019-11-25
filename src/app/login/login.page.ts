import { Component } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage {

  errorMessage: string;
  loginForm: FormGroup;
  validationWarning: any;


  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthService
  ) {

    this.errorMessage = '';

    const validator = {
      email: [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ],
      password: [
        Validators.required,
        Validators.minLength(8)
      ]
    };

    this.validationWarning = {
      email: 'This field must be a valid email address',
      password: 'This field must have at least 8 characters'
    };

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose(validator.email)),
      password: new FormControl('', Validators.compose(validator.password))
    });
  }


  login(credentials) {
    this.authService.login(credentials)
    .then(
      (res) => {
        this.storage.set('isUserLoggedIn', true);
        this.navCtrl.navigateForward('/menu/home');
      }
    )
    .catch(
      (error) => {
        this.errorMessage = error;
      }
    );
  }


  goToSignUpPage() {
    this.navCtrl.navigateForward('/signup');
  }

}
