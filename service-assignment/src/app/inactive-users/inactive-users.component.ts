import { Component, OnInit, effect } from '@angular/core';

import { UserService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
    let userEffect = effect(() => {
      this.users = this.userService.Users().filter(u => !u.active);
    })
  }

  ngOnInit() {
    //this.users = this.userService.Users().filter(u => !u.active);
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
