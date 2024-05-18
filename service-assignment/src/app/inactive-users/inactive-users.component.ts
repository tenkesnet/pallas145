import { Component, OnInit, effect } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: { id: number, name: string, active: boolean }[] = [];

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
