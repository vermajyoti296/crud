import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../CustomValidators';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  submitted: boolean = false;
  formdata: any;
  data: any;
  loginForm: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      user: ['',[Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(12)]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
      confirm: ['', [Validators.required]]
    }, {
      validators: MustMatch('password', 'confirm')
    });
  }

  loginUser(){
    this.submitted = true;
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.router.navigate(['/user/userlist']);
      localStorage.setItem('data', JSON.stringify(this.loginForm.value))
    }
    else {
      this.router.navigate(['/user/adduser']);
    }
  }

  get user(){
    return this.loginForm.get('user');
  }
  get phone(){
    return this.loginForm.get('phone');
  }
  get email(){
    return this.loginForm.get('email');
  }
  get address(){
    return this.loginForm.get('address');
  }
  get password(){
    return this.loginForm.get('password');
  }
  get confirm(){
    return this.loginForm.get('confirm');
  }
  ngOnInit(): void { }
}














