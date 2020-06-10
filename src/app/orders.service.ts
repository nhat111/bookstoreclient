import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {}

  getListOrders(): Observable<any>{
  	return this.http.get('http://localhost:8080/api/orders');
  }

  getOrdersByUser(): Observable<any>{
  	return this.http.get('http://localhost:8080/api/orders/nnhat');
  }


}
