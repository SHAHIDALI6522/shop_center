import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor() {}
  getval: any;
  sum = 2 + 2;

  ngOnInit(): void {}
  getvalue(_user: number) {
    this.getval = 3 + _user;
  }
}
