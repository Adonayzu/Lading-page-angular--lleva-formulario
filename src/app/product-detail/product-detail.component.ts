
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductoDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {}

  product?: Product
  productList: Product[] = productsList;
  loading: boolean = true;
  color: string = '';

  ngOnInit(): void {
    setTimeout(() =>{
      this._route.params.subscribe(params => {
        this.product = this.productList.find(product => product.id == params['productId']); 
        this.color = this.product?.price as number > 5 ? 'red': ''; // este para utilizar el ng style
        this.loading = false;

       });
    },1500);  
  }  
}



/* ngOnInit(): void {
  this._route.params.subscribe(params => {
    this.producto = params['productId'];  */