import { Component } from '@angular/core';

import { UserService } from './users.service';
import { CounterService } from './counter.service';
import { ActiveUsersComponent } from './active-users/active-users.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
}
