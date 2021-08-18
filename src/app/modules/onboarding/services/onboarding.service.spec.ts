import { TestBed } from '@angular/core/testing';

import { OnboardingService } from './onboarding.service';

describe('OnboardingService', () => {
  let service: OnboardingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnboardingService],
    });
    service = TestBed.inject(OnboardingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should login a user', () => {
    const payload = {
      email: 'john@gmail.com',
      password: 'qwerty',
    };
    service.login(payload).subscribe((user) => {
      expect(user).toBeTruthy();
      expect(user.firstName).toBe('test');
      expect(user.lastName).toBe('test');
      expect(user.email).toBe(payload.email);
    });
  });
  it('should register a user', () => {
    const payload = {
      email: 'john@gmail.com',
      firstName: 'John',
      lastName: 'Doe',
      password: 'qwerty',
    };
    service.register(payload).subscribe((user) => {
      expect(user).toBeTruthy();
      expect(user.firstName).toBe(payload.firstName);
      expect(user.lastName).toBe(payload.lastName);
      expect(user.email).toBe(payload.email);
    });
  });
});
