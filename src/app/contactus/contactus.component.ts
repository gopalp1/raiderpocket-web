import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private matSnackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: [''],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      this.matSnackBar.open(
        'Thank you! Your message has been submitted.',
        'Close',
        {
          duration: 3000,
          panelClass: 'success-toast',
          horizontalPosition: 'end',
          verticalPosition: 'top',
        }
      );
      this.contactForm.reset();
    } else {
      this.matSnackBar.open(
        'Please enter valid data for required fields',
        'Close',
        {
          duration: 3000,
          panelClass: 'error-toast',
          horizontalPosition: 'end',
          verticalPosition: 'top',
        }
      );
    }
  }

  onClear() {
    this.contactForm.reset();
  }
}
