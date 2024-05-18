import { Injectable, WritableSignal, signal } from '@angular/core';

import { CounterService } from './counter.service';
import { User } from './user';

@Injectable()
export class UserService {
  private users: WritableSignal<User[]>;

  constructor(private counterService: CounterService) {
    this.users = signal([
      { id: 0, name: 'Max', active: true },
      { id: 1, name: 'Anna', active: true },
      { id: 2, name: 'Chris', active: false },
      { id: 3, name: 'Manu', active: false }]);

  }

  get Users() {
    return this.users.asReadonly();
  }

  setToActive(id: number) {
    this.users.update(u => { u[id].active = true; return u.slice(0); });
    this.counterService.incrementInActiveToActive();
    console.log(this.users());
  }

  setToInactive(id: number) {
    this.users.update(u => { u[id].active = false; return u.slice(0); });
    this.counterService.incrementActiveToInactive();
    console.log(this.users());
  }
}
