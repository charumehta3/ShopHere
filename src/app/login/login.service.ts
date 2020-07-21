import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class LoginService{
    getUserDetails(){
        return {name:"UserA"}
    }
}