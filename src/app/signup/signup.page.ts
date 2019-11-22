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
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})


export class SignupPage {

  errorMessage: string;
  signupForm: FormGroup;
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

    this.signupForm = this.formBuilder.group({
      firstName: new FormControl(),
      middleName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl('', Validators.compose(validator.email)),
      password: new FormControl('', Validators.compose(validator.password))
    });
  }


  goToLoginPage() {
    this.navCtrl.navigateBack('/login');
  }


  signup(signupData) {
    signupData.password = btoa(signupData.password);
    this.authService.registerUser(signupData).then(
      () => {
        this.navCtrl.navigateBack('/login');
      }
    );
  }

}
