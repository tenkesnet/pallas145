import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: { name: string, active: boolean }[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users.filter(u => u.active);
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
