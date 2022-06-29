import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private errorSnackbarPanelClass = 'error_snackbar';
  private successSnackbarPanelClass = 'success_snackbar';

  constructor(private snackbar: MatSnackBar) {}

  public showSuccess(message = 'Action successful!'): void {
    this.showSnackbar(message, this.successSnackbarPanelClass);
  }

  public showError(message = 'An error has occured!'): void {
    this.showSnackbar(message, this.errorSnackbarPanelClass);
  }

  private showSnackbar(message: string, panelClass: string): void {
    this.snackbar.open(message, 'Dismiss', {
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      duration: 3000,
      panelClass,
    });
  }
}
