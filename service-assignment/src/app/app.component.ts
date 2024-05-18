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
  title = 'service-assignment'
  price = 6

  afaSzamitas(szam: number): number {
    if (this.incrementValue != 1) {
      this.incrementValue = 1
    }
    return szam + this.incrementValue;
  }

  get incrementValue() {
    return this.price
  }

  set incrementValue(value: number) {
    this.price = value
  }
}
