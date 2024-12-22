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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
