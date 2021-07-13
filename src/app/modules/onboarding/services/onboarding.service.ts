import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/models/user';

@Injectable()
export class OnboardingService {
  constructor() {}
  login(payload: { email: string; password: string }): Observable<any> {
    return of({
      firstName: 'test',
      lastName: 'test',
      email: payload.email,
    });
  }
  register(payload: IUser): Observable<any> {
    return of({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
    });
  }
}
