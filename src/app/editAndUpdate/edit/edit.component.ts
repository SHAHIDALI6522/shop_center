import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FakeService } from 'src/app/fakeApi/fakeApiServeice/fake.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  edit = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl(''),
  });

  constructor(private fakeapi: FakeService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.fakeapi
      .geteditData(this.router.snapshot.params['id'])
      .subscribe((resulet) => {
        console.log(resulet);
      });
  }
}
