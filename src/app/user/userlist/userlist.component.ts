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
  formdata: any = [];
  data: any;
  item: any=[];
  delete: any
  constructor(private router: Router) { }

  deleteuser() { 
    localStorage.clear();
  }

  edituser() {
    this.router.navigate(['/user/edituser']);
  }
  ngOnInit(): void {
    if (localStorage.getItem("data"))
      this.data = JSON.parse(localStorage.getItem("data")!);
  }
}
