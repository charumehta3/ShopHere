import { LayoutComponent } from './layout.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [LayoutComponent, CartComponent,SearchComponent,
                 ProductComponent,FilterComponent],
  exports:[LayoutComponent, CartComponent,SearchComponent,
            ProductComponent,FilterComponent],
  providers:[HttpClientModule],
  imports:[CommonModule]
})
export class LayoutModule{}