import {Component, OnInit} from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { LayoutService } from '../layout.service';

@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent implements OnInit{
  value = 'hi'
  response: Product[];
  
  constructor(public productService: ProductService, public layoutService: LayoutService){
    this.layoutService.search$.subscribe((r)=> this.response = r);
  }

  ngOnInit(){
    this.layoutService.getProducts().subscribe((data)=>{
      this.response = <Product[]>data
      this.renderResponse();
    })
    
  }

  renderResponse(){
    console.log(this.response)
    // this.response.forEach((data)=>{

    // })
  }
  add(itemDetails){
    this.layoutService.addToCart(itemDetails);
  }
}