import { TestBed } from '@angular/core/testing';
import { ActiveUsersComponent } from './active-users.component';
import { UserService } from '../users.service';
import { CounterService } from '../counter.service';

describe('Active user component test', () => {
  let userService: UserService;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ActiveUsersComponent],
      providers: [{ provide: UserService, useVaue: userService }, CounterService]
    }).compileComponents()
    userService = TestBed.inject(UserService)
  })


  it('Check span', () => {
    const fixture = TestBed.createComponent(ActiveUsersComponent);
    let comp = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement
    console.log(compiled)
    expect(compiled.querySelector('span')).not.toBeNull()
    expect(compiled.querySelector('span')?.textContent).toEqual("Active Users")
  })
})
