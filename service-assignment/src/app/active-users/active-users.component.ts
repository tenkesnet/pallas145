import { Component, effect } from '@angular/core';

import { UserService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
    let userEffect = effect(() => {
      this.users = this.userService.Users().filter(u => u.active);
    })
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
