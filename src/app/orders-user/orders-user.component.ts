import { Component, OnInit } from '@angular/core';
import {Orders} from './../orders';
import {OrdersService} from './../orders.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-orders-user',
  templateUrl: './orders-user.component.html',
  styleUrls: ['./orders-user.component.css']
})
export class OrdersUserComponent implements OnInit {

	orders: Observable<Orders[]>;

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
  	this.orders = this.ordersService.getOrdersByUser();

  }

}
