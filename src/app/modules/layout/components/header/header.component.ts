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
import { CartService } from 'src/app/store/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authSubx: Subscription;
  private cartSubx: Subscription;
  currentUser: IUser;
  cartCount: number = 0;
  constructor(
    public auth: AuthService,
    private cartService: CartService,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authStateListener();
    this.cartStateListener();
  }
  authStateListener(): void {
    this.authSubx = this.auth.currentUser.subscribe((user) => {
      if (user) {
        this.currentUser = user;
      }
    });
  }
  cartStateListener(): void {
    this.authSubx = this.cartService.cartChange.subscribe((count) => {
      this.cartCount = count;
      this.detectChanges();
    });
  }
  detectChanges(): void {
    this.cdref.detectChanges();
  }
  ngOnDestroy() {
    this.authSubx.unsubscribe();
    this.cartSubx.unsubscribe();
  }
}
