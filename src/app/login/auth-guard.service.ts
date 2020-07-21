import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class AuthGuardService implements CanActivate{
    constructor(public router: Router) {}
    authenticated:boolean = true;
    
    canActivate(): boolean {
        if (!this.authenticated) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
      }
}