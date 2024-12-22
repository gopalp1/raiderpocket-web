import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { urlConstants } from 'src/app/core/constants.ts/url';
import { HttpService } from 'src/app/core/services/http.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  mobileNumber: string = '';
  isOtpSent: boolean = false;
  showOtpInput: boolean = false;
  otpValue: string = '';
  configuration = {
    length: 4,
    allowNumbersOnly: true,
  };
  mobilePattern = /^[6-9]\d{9}$/;
  constructor(
    private apiService: HttpService,
    private storageService: UserService,
    private router: Router,
    private toast: MatSnackBar,
    private location: Location
  ) {
    const data: any = storageService.getUserValue();
    console.log(data, 'data in login');
    if (data) {
      // this.router.navigate(['/admin']);
    }
  }
  goBack() {
    this.isOtpSent = false;
  }
  sendOtp() {
    if (this.mobilePattern.test(this.mobileNumber)) {
      const payload = {
        url: urlConstants.GET_OTP,
        payload: {
          mobile: this.mobileNumber,
          userType: 'Admin',
        },
      };
      this.apiService.post(payload).then(
        (resp: any) => {
          console.log(resp, 'resp');
          this.isOtpSent = true;
          this.showOtpInput = true;
        },
        (error) => {
          console.log(error, 'erroe');
        }
      );
    } else {
      this.toast.open('Please enter valid mobile number', 'Close', {
        duration: 3000,
        panelClass: 'error-toast',
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
  }

  onOtpChange(value: string) {
    this.otpValue = value;
    console.log('Current OTP:', this.otpValue);
  }

  verifyOtp() {
    if (this.otpValue.length === this.configuration.length) {
      const payload = {
        url: urlConstants.VERIFY_OTP,
        payload: {
          otp: this.otpValue,
          mobile: this.mobileNumber,
          name: 'Your name',
          userType: 'Admin',
        },
      };

      this.apiService.post(payload).then((resp: any) => {
        if (resp?.token) {
          this.storageService.setUserValue(resp);
          this.router.navigate(['/admin']);
        }
      });
    } else {
      this.toast.open('Invalid OTP. Please try again.', 'Close', {
        duration: 3000,
        panelClass: 'error-toast',
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
  }

  // Resend OTP Handler
  resendOtp() {
    this.toast.open('OTP has been resent!.', 'Close', {
      duration: 3000,
      panelClass: 'success-toast',
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  navigateToWeb() {
    this.location.back();
  }
}
