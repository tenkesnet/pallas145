import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: { name: string, active: boolean }[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users.filter(u => !u.active);
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
