import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

 constructor(private httpclient:HttpClient) {}

  getUsersList(): Observable<any>{

  	return this.httpclient.get('http://localhost:8080/api/users');
  }

}
