import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeService } from '../fakeApiServeice/fake.service';

@Component({
  selector: 'app-fakeapi-html',
  templateUrl: './fakeapi-html.component.html',
})
export class FakeapiHtmlComponent implements OnInit {
  apidata: any;

  // api sey data get karniy ka dosrha tariqa ya hota ha
  // apidata:Observable

  constructor(private fakeservice: FakeService) {
    this.fakeservice.getUserData().subscribe((apidaa) => {
      this.apidata = apidaa;
    });

    // api sey data get karniy ka dosrha tariqa ya hota ha
  }

  ngOnInit(): void {}
  deleterow(id: any) {
    // this.apidaa.splice(this.apidaa.id);
    // let index = this.apidaa.findIndex((item: { id: any }) => item.id === id);
    // if (index < 0) return;
    // this.apidaa.splice(index, 1);
    let index = this.apidata.findIndex((item: { id: number }) => item.id == id);
    if (index < 0) return;
    this.apidata.splice(index, 1);
  }
}
