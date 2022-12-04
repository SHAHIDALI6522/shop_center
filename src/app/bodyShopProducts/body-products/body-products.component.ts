import { Component, OnInit } from '@angular/core';
import { BodyService } from '../bodeyService/bodyservice.service';

@Component({
  selector: 'app-body-products',
  templateUrl: './body-products.component.html',
})
export class BodyProductsComponent implements OnInit {
  selected = 'option2';
  discont: any;
  count: any;
  protected: any;
  constructor(private productitem: BodyService) {
    this.protected = productitem.bodyproduct;
    this.count = this.productitem.bodyproduct.length;
  }

  ngOnInit(): void {}
}
