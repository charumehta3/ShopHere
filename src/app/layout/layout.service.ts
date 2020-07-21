import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LayoutService{
  noOfItems: number=0;
  public message$: Observable<number>;
  public search$: Observable<any>;
  private messageSubject = new BehaviorSubject<number>(null);
  private searchSubject = new BehaviorSubject<any>(null);

    constructor(public http:HttpClient){
      this.message$ = this.messageSubject.asObservable();
      this.search$ = this.searchSubject.asObservable();
    }
    getProducts(searchText?){
      let apiUrl="https://xebiascart.herokuapp.com/products";
      if(searchText){
        apiUrl += "?title="+searchText;
      }
      return this.http.get(apiUrl);
    }

    addToCart(item){
      //item:::to show item details in the cart 
      this.noOfItems +=1;
      this.messageSubject.next(this.noOfItems);
    }

    search(res){
      this.searchSubject.next(res);
    }
}