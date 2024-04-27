import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  users: { name: string, active: boolean }[] = [
    { name: 'Max', active: true },
    { name: 'Anna', active: true },
    { name: 'Chris', active: false },
    { name: 'Manu', active: false }];


  constructor(private counterService: CounterService) { }

  setToActive(id: number) {
    this.users[id].active = true;
    this.counterService.incrementInActiveToActive();
    console.log(this.users);
  }

  setToInactive(id: number) {
    this.users[id].active = false;
    this.counterService.incrementActiveToInactive();
    console.log(this.users);
  }
}
