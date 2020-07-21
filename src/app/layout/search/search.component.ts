import {Component, OnInit} from '@angular/core';
import { LayoutService } from '../layout.service';
import { Product } from '../product/product.model';

@Component({
  selector:'app-search',
  templateUrl:'./search.component.html'
})
export class SearchComponent implements OnInit{
  constructor(public layoutService: LayoutService){}
  data: Product[]
  ngOnInit() {
}

  search(value){
    const searchText = value;
    this.layoutService.getProducts(searchText).subscribe((r)=>{
      this.data = <Product[]>r;
      this.layoutService.search(this.data);
    }
    );
 
  }
}
