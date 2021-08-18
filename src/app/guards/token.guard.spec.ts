import { TestBed } from '@angular/core/testing';

import { TokenGuard } from './token.guard';

xdescribe('TokenGuard', () => {
  let guard: TokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
