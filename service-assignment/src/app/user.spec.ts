import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
  it('Field test', () => {
    let user = new User()
    expect('name' in user).toBeTruthy()
  })
});
