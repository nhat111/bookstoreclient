import { Component, OnInit } from '@angular/core';
import {OrdersService} from './../orders.service';
import {Orders} from './../orders';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

	orders: Observable<Orders[]>;

  constructor(private odersService:OrdersService) { }

  ngOnInit() {
  	this.orders = this.odersService.getListOrders();
  }

}
