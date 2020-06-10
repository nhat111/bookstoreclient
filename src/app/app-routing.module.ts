import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { SigninComponent } from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';
import { OrdersComponent} from './orders/orders.component';
import {OrdersUserComponent} from './orders-user/orders-user.component';


const routes: Routes = [
{ path: 'home', component: UsersListComponent },
{ path: 'login', component: SigninComponent },
{path: 'signup',component:SignupComponent,},
{path: 'profile',component:ProfileComponent},
{ path: 'orders',component: OrdersComponent},
{ path: 'ordersuser',component: OrdersUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
