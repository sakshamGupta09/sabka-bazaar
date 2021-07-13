import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { AuthService } from 'src/app/store/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authSubx: Subscription;
  currentUser: IUser;
  constructor(public auth: AuthService, private cdref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.authStateListener();
  }
  authStateListener(): void {
    this.authSubx = this.auth.currentUser.subscribe((user) => {
      if (user) {
        this.currentUser = user;
      }
    });
  }
  detectChanges(): void {
    this.cdref.detectChanges();
  }
  ngOnDestroy() {
    this.authSubx.unsubscribe();
  }
}
