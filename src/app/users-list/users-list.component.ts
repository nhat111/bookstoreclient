import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';
import {Users} from './../users'
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

 users: Observable<Users[]>;

  constructor(private userSevice: UsersService) { }

  ngOnInit() {
  	this.users = this.userSevice.getUsersList();
  }


}
