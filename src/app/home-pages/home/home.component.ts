import { Component, OnInit } from '@angular/core';
import { HomeService } from '../homeservice/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  shopproduct: any;
  searchText = '';
  constructor(public productitem: HomeService) {}

  ngOnInit(): void {
    this.shopproduct = this.productitem.product;
    this.shopproduct.sort();
  }
}
