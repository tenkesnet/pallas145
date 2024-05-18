import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { UserService } from './users.service';
import { CounterService } from './counter.service';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';

/*
function TestEsetek() {
  
}
describe('uz', TestEsetek);
*/

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ActiveUsersComponent,
        InactiveUsersComponent
      ],
      providers: [
        UserService,
        CounterService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the ActiveUserComponent', () => {
    const fixture = TestBed.createComponent(ActiveUsersComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  function osszeadTest() {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.afaSzamitas(4) + 2).toEqual(7)
  }

  it('Összeadás', osszeadTest)

  it(`should have as title 'service-assignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('service-assignment');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    /* ? operator jelentése
    if (compiled.querySelector('h1') != null) {
    }*/
    expect(compiled.querySelector('h1')?.textContent).toEqual('Hello world!');


  });
});
