import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'app-onbarded-users',
  templateUrl: './onbarded-users.component.html',
  styleUrls: ['./onbarded-users.component.scss']
})
export class OnbardedUsersComponent {
  displayedColumns: string[] = [
    'profilePic',
    'name',
    'gender',
    'dateOfBirth',
    'phoneNo',
    'email',
    'city',
    'status'
  ];
  dataSource = [
    {
      profilePic: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
      name: 'John Doe',
      gender: 'Male',
      dateOfBirth: '1990-05-15',
      phoneNo: '9876543210',
      email: 'john.doe@example.com',
      city: 'New York',
      area: 'Manhattan',
      aadhaarUpload: {
        frontPhoto: 'https://example.com/uploads/aadhaar/front1.jpg',
        backPhoto: 'https://example.com/uploads/aadhaar/back1.jpg',
      },
      panUpload: 'https://example.com/uploads/pan/user1.jpg',
      status: 'Pending'

    },
    {
      profilePic: 'data:image/jpeg;base64,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',
      name: 'Jane Smith',
      gender: 'Female',
      dateOfBirth: '1985-12-20',
      phoneNo: '9876543211',
      email: 'jane.smith@example.com',
      city: 'Los Angeles',
      area: 'Beverly Hills',
      aadhaarUpload: {
        frontPhoto: 'https://example.com/uploads/aadhaar/front2.jpg',
        backPhoto: 'https://example.com/uploads/aadhaar/back2.jpg',
      },
      panUpload: 'https://example.com/uploads/pan/user2.jpg',
      status: 'Pending'

    },
    {
      profilePic: 'data:image/jpeg;base64,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',
      name: 'Robert Brown',
      gender: 'Male',
      dateOfBirth: '1995-07-08',
      phoneNo: '9876543212',
      email: 'robert.brown@example.com',
      city: 'Chicago',
      area: 'Downtown',
      aadhaarUpload: {
        frontPhoto: 'https://example.com/uploads/aadhaar/front3.jpg',
        backPhoto: 'https://example.com/uploads/aadhaar/back3.jpg',
      },
      panUpload: 'https://example.com/uploads/pan/user3.jpg',
      status: 'Approved'

    },
    {
      profilePic: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
      name: 'Emily Davis',
      gender: 'Female',
      dateOfBirth: '2000-02-28',
      phoneNo: '9876543213',
      email: 'emily.davis@example.com',
      city: 'San Francisco',
      area: 'Mission District',
      aadhaarUpload: {
        frontPhoto: 'https://example.com/uploads/aadhaar/front4.jpg',
        backPhoto: 'https://example.com/uploads/aadhaar/back4.jpg',
      },
      panUpload: 'https://example.com/uploads/pan/user4.jpg',
      status: 'Pending'

    },
  ];
  constructor(public dialog: MatDialog,){

  }
  view(data?: any): void {
    const dialogRef = this.dialog.open( ViewComponent,{
      data: data,
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
