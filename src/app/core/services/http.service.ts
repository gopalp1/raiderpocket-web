import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { NetworkService } from './network.service';
import { LocalStorageService } from './localstorage.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoaderService } from './loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'https://riderpocket.com/rider/';
  isFeedbackTriggered = false;
  isAlertOpen = false;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private network: NetworkService,
    private localStorage: LocalStorageService,
    private injector: Injector,
    private loaderService: LoaderService,
    private snackBar: MatSnackBar,
    private sotrageService: UserService
  ) {}

  private async setHeaders() {
    const token = await this.getToken();
    console.log(token, 'token');
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const acceptLanguage = await this.localStorage.getLocalData('en');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-auth-token': token || '',
      'Time-Zone': timezone,
    });

    return headers;
  }

  private checkNetworkAvailability(): boolean {
    if (!this.network.isNetworkAvailable) {
      // this.toastService.showToast('You are offline!', 'danger');
      return false;
    }
    return true;
  }

  private handleError(error: any) {
    const msg = error?.error?.message || 'Something went wrong!';
    this.loaderService.hideLoader();
    this.snackBar.open(msg, 'Close', {
      duration: 3000,
      panelClass: 'error-toast',
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
    switch (error.status) {
      case 400:
      case 404:

      case 406:
      case 422:
        // this.toastService.showToast(msg, 'danger');
        break;
      case 401:
        this.triggerLogoutConfirmationAlert(error);
        break;
      default:
      // this.toastService.showToast(msg, 'danger');
    }
    return throwError(() => new Error(msg));
  }

  async post(requestParam: any) {
    if (!this.checkNetworkAvailability()) return;
    this.loaderService.showLoader();
    try {
      const headers = await this.setHeaders();
      const url = `${this.baseUrl}${requestParam.url}`;
      console.log(requestParam.payload, 'requestParam');
      const response = await this.http
        .post(url, requestParam.payload, { headers })
        .pipe(catchError((error) => this.handleError(error)))
        .toPromise();
      return response;
    } catch (error) {
      console.error('Error in API call:', error);
      throw error;
    } finally {
      this.loaderService.hideLoader();
    }
  }

  async put(requestParam: any) {
    if (!this.checkNetworkAvailability()) return;
    this.loaderService.showLoader();
    const headers = await this.setHeaders();
    const url = `${this.baseUrl}${requestParam.url}`;
    return this.http
      .put(url, requestParam.payload || {}, { headers })
      .pipe(catchError((error) => this.handleError(error)))
      .toPromise()
      .finally(() => this.loaderService.hideLoader()); // Hide the loader after the operation
  }

  async get(requestParam: any) {
    if (!this.checkNetworkAvailability()) return;
    this.loaderService.showLoader();
    const headers = await this.setHeaders();
    const url = `${this.baseUrl}${requestParam.url}`;
    return this.http
      .get(url, { headers })
      .pipe(catchError((error) => this.handleError(error)))
      .toPromise()
      .finally(() => this.loaderService.hideLoader()); // Hide the loader after the operation
  }

  async delete(requestParam: any) {
    if (!this.checkNetworkAvailability()) return;
    this.loaderService.showLoader();
    const headers = await this.setHeaders();
    const url = `${this.baseUrl}${requestParam.url}`;
    return this.http
      .delete(url, { headers })
      .pipe(catchError((error) => this.handleError(error)))
      .toPromise()
      .finally(() => this.loaderService.hideLoader()); // Hide the loader after the operation
  }

  async patch(requestParam: any) {
    if (!this.checkNetworkAvailability()) return;
    this.loaderService.showLoader();
    const headers = await this.setHeaders();
    const url = `${this.baseUrl}${requestParam.url}`;
    return this.http
      .patch(url, requestParam.payload || {}, { headers })
      .pipe(catchError((error) => this.handleError(error)))
      .toPromise()
      .finally(() => this.loaderService.hideLoader()); // Hide the loader after the operation
  }
  async getToken(): Promise<string | null> {
    const token: any = await this.sotrageService.getUserValue();
    console.log(token, 'token');
    if (!token) return null;

    // const isValidToken = this.userService.validateToken(token);
    // if (!isValidToken) {
    //   // const authService = this.injector.get(AuthServiceService);
    //   // await authService.logoutAccount();
    // }
    return token.token;
  }

  async triggerLogoutConfirmationAlert(error: any) {
    const msg = error?.error?.message || 'Session expired. Please login again.';
    if (!this.isAlertOpen) {
      this.isAlertOpen = true;
      // this.toastService.showToast(msg, 'danger');
      // const authService = this.injector.get(AuthServiceService);
      // await authService.logoutAccount();
      this.isAlertOpen = false;
    }
  }
}
