import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor() {}
  getval: any;
  sum = 2 + 2;

  allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  specialKeys = ['Backspace', 'ArrowRight', 'ArrowLeft'];

  ngOnInit(): void {}
  getvalue(_user: number) {
    this.getval = 3 + _user;
  }

  restrictZero(event: any) {
    if (!event) return;
    if (this.specialKeys.includes(event.key)) return;

    if (!this.allowedKeys.includes(event.key)) {
      event.preventDefault();
    }

    const value = event.target.value;
    const newValue = value + event.key;
    if (Number(newValue) > 100) {
      event.preventDefault();
    }
  }
}
