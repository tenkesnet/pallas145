import { TestBed } from '@angular/core/testing';
import { UserService } from './users.service';
import { CounterService } from './counter.service';


describe('Users service test', () => {
    let userService: UserService;
    let counterService: CounterService
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService, CounterService]
        })
    })

    it('Users getter test', () => {
        userService = TestBed.inject(UserService)
        expect(userService.Users().length).toEqual(4)
    })

    it('Set to inactive', () => {
        userService = TestBed.inject(UserService)
        counterService = userService.publicCounterService
        userService.setToInactive(0)
        userService.setToInactive(1)
        expect(counterService.activeToInactiveCounter).toEqual(2)
        expect(userService.Users().filter(u => u.active).length).toEqual(0)
    })


})