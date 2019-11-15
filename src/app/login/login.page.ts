import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validatorWarnings: any;


  constructor(private formBuilder: FormBuilder) {
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


  loginUser(credentials) {
    console.log(credentials);
  }

}
