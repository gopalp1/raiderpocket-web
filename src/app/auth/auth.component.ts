import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { Location } from '@angular/common';
const firebaseConfig = {
  apiKey: 'AIzaSyATAOJcTLwJVAoV2tZBgeKQgeIbYwy7Cps',
  authDomain: 'mr-meat-4ea02.firebaseapp.com',
  projectId: 'mr-meat-4ea02',
  storageBucket: 'mr-meat-4ea02.firebasestorage.app',
  messagingSenderId: '933804502159',
  appId: '1:933804502159:web:f68515cfc8be5905a894fa',
  measurementId: 'G-7RGY1RX0QH',
};

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, AfterViewInit {
  mobileNumber: string = '';
  isOtpSent: boolean = false;
  otpValue: string = '';
  verificationId: string = '';
  configuration = {
    length: 6,
    allowNumbersOnly: true,
  };
  mobilePattern = /^[6-9]\d{9}$/;

  auth = getAuth(initializeApp(firebaseConfig));
  recaptchaVerifier!: RecaptchaVerifier;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private location: Location,
    private toast: MatSnackBar
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const auth = getAuth();
    this.recaptchaVerifier = new RecaptchaVerifier(
      this.auth,
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response: any) => {
          console.log('reCAPTCHA solved:', response);
        },
        'expired-callback': () => {
          alert('reCAPTCHA expired. Try again.');
        },
      }
    );

    this.recaptchaVerifier.render();
  }

  sendOtp() {
    const auth = getAuth();
    signInWithPhoneNumber(
      this.auth,
      `+91 ${this.mobileNumber}`,
      this.recaptchaVerifier
    )
      .then((confirmationResult) => {
        this.verificationId = confirmationResult.verificationId;
        console.log('OTP sent successfully.');
      })
      .catch((error) => {
        console.error('Error during OTP sending:', error);
      });
  }

  onOtpChange(value: string) {
    this.otpValue = value;
  }

  goBack() {
    this.isOtpSent = false;
  }

  verifyOtp() {
    const credential = PhoneAuthProvider.credential(
      this.verificationId,
      this.otpValue
    );
    this.afAuth
      .signInWithCredential(credential)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        this.toast.open('Invalid OTP. Please try again.', 'Close', {
          duration: 3000,
          panelClass: 'error-toast',
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      });
  }

  navigateToWeb() {
    this.location.back();
  }
}
