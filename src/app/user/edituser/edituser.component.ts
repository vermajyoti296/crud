import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  submitted: boolean = false;
  formdata: any;
  data: any;
  constructor(private router: Router) {
    if (localStorage.getItem("data"))
    this.formdata = JSON.parse(localStorage.getItem("data")!);
    this.loginForm.patchValue({
      user:   this.formdata.user,
      email:  this.formdata.email,
      phone:  this.formdata.phone,
      address:this.formdata.address,
      password:this.formdata.password,
      confirm: this.formdata.confirm
    })
    localStorage.setItem('data', JSON.stringify(this.loginForm.value));
  }
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(12)]),
    address: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    confirm: new FormControl('', [Validators.required])
  })
  Update() {
    this.submitted = true;
    console.log(this.loginForm.value);
  }
  get user() {
    return this.loginForm.get('user');
  }
  get phone() {
    return this.loginForm.get('phone');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get address() {
    return this.loginForm.get('address');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get confirm() {
    return this.loginForm.get('confirm');
  }
  ngOnInit(): void {
  }

}
