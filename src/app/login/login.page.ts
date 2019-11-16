import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  errorMessage: string;
  loginForm: FormGroup;
  validatorWarnings: any;


  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
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

    this.validatorWarnings = {
      email: 'This field must be a valid email address',
      password: 'This field must have at least 8 characters'
    };

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose(validator.email)),
      password: new FormControl('', Validators.compose(validator.password))
    });
  }


  ngOnInit() { }


  login(credentials) {
    this.authService.login(credentials)
    .then(
      (res) => {
        this.navCtrl.navigateForward('/home');
      }
    )
    .catch(
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
