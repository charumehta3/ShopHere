import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({providedIn: 'root'})
export class ProductService{
    constructor(public http:HttpClient){

    }
    getProducts(searchText){
      let apiUrl="https://xebiascart.herokuapp.com/products";
      if(searchText){
        apiUrl += "?title="+searchText;
      }
      return this.http.get(apiUrl);
    }
}