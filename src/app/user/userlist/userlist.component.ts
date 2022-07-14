import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  formdata: any;
  constructor(private router: Router) { }

  edituser() {
    this.router.navigate(['/user/edituser']);
  }
  ngOnInit(): void {
    if (localStorage.getItem("data"))
    this.formdata= JSON.parse(localStorage.getItem("data")!);
  }
}
