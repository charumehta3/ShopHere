import {Component, ViewChild, ElementRef} from '@angular/core';
import {LoginService} from '../login/login.service';
import { LayoutService } from './layout.service';

@Component({
  selector:'app-layout',
  templateUrl:'./layout.component.html'
})
export class LayoutComponent{
  @ViewChild("search") search:ElementRef;
  @ViewChild("product") product:ElementRef;
  username:string;
  constructor(public loginService:LoginService, public layoutService: LayoutService){
    this.username = this.loginService.getUserDetails().name;
    
  }
}