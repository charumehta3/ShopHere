import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './layout/product/product.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './login/auth-guard.service';
const routes: Routes = [
  { path: '',  pathMatch: 'full', component: ProductComponent, canActivate:[AuthGuard] },
	{ path: 'products', component: ProductComponent },
	{ path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
