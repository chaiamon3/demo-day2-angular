import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: Router, private userService: UserService) { }

  gotoMain() {
    this.route.navigate(['/']);
  }

  ngOnInit(): void {
    this.userService.getAllUsers();
  }

}
