import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private _snackBar: MatSnackBar) {}
  config: MatSnackBarConfig = {
    duration: 2000,
    verticalPosition: 'bottom',
    horizontalPosition: 'left',
    panelClass: '',
  };
  showSuccess(msg: string): void {
    this.config.panelClass = 'success-toast';
    this._snackBar.open(msg, '', this.config);
  }
  showError(msg: string): void {
    this.config.panelClass = 'error-toast';
    this._snackBar.open(msg, '', this.config);
  }
}
