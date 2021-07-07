import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MessageService } from '../services/message.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private message: MessageService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = localStorage.getItem('access_token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
        url: environment.API_URL + req.url,
      });
    }
    return next.handle(req).pipe(
      tap((event) => {
        if (event.type == HttpEventType.Response) {
          const body = event.body;
          this.showMessage(body.status_code, body.message);
        }
      })
    );
  }
  showMessage(status: number, msg: string): void {
    if (status != 200) {
      this.message.showError(msg);
    }
  }
}
