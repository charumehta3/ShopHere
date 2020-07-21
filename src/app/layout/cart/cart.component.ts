import {Component} from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector:'app-cart',
  templateUrl:'./cart.component.html'
})
export class CartComponent{
  noOfItems:number;
  constructor(public layoutService: LayoutService){
    this.layoutService.message$.subscribe((no)=>{
      this.noOfItems = no;
    })
  }
  
}