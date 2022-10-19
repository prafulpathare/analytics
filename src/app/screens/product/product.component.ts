import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.getProducts();
  }

  getProducts() : void {
    this.http.get('https://fakestoreapi.com/products').subscribe(
      (resp: any) => this.products = resp,
      (err: any) => console.log('error fetching products', err)
    )
  }

}
