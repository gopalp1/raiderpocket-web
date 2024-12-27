import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { WebComponent } from './web/web.component';
import { AuthComponent } from './auth/auth.component';
import { CoreModule } from './core/core.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyATAOJcTLwJVAoV2tZBgeKQgeIbYwy7Cps',
  authDomain: 'mr-meat-4ea02.firebaseapp.com',
  projectId: 'mr-meat-4ea02',
  storageBucket: 'mr-meat-4ea02.firebasestorage.app',
  messagingSenderId: '933804502159',
  appId: '1:933804502159:web:f68515cfc8be5905a894fa',
  measurementId: 'G-7RGY1RX0QH',
};

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    AuthComponent,
    PrivacyPolicyComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    SharedModule,
    NgOtpInputModule,
    HttpClientModule,
    CoreModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
