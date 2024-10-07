import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'app-ev-bikes',
  templateUrl: './ev-bikes.component.html',
  styleUrls: ['./ev-bikes.component.scss']
})
export class EvBikesComponent {
  displayedColumns: string[] = ['name', 'email', 'mobileNum',   'client', 'bikeType', 'vehicleNum', 'status'];
  dataSource=[
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "mobileNum": "9876543210",
      "currentAddress": "123 Main Street, Cityville",
      "referenceNum1": "9988776655",
      "referenceNum2": "8877665544",
      "client": "Swiggy",
      "bikeType": "Electric",
      "vehicleNum": "MH12AB1234",
      "bikePhotos": {
        "frontPhoto": "path/to/photo1.jpg",
        "backPhoto": "path/to/photo2.jpg",
        "leftPhoto": "path/to/photo2.jpg",
        "rightPhoto": "path/to/photo2.jpg",

      },
    'status': 'Approved'

    },
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "mobileNum": "8765432109",
      "currentAddress": "456 Oak Avenue, Townsville",
      "referenceNum1": "9876543211",
      "referenceNum2": "8765432108",
      "client": "Zomato",
      "bikeType": "Scooter",
      "vehicleNum": "MH14XY7890",
      "bikePhotos": {
        "frontPhoto": "path/to/photo1.jpg",
        "backPhoto": "path/to/photo2.jpg",
        "leftPhoto": "path/to/photo2.jpg",
        "rightPhoto": "path/to/photo2.jpg",

      },
    'status': 'Pending'

    },
    {
      "name": "Michael Johnson",
      "email": "michael.johnson@example.com",
      "mobileNum": "7654321098",
      "currentAddress": "789 Elm Street, Metropolis",
      "referenceNum1": "7654321097",
      "referenceNum2": "6543210986",
      "client": "Uber",
      "bikeType": "Motorbike",
      "vehicleNum": "DL3CAC5432",
      "bikePhotos": {
        "frontPhoto": "path/to/photo1.jpg",
        "backPhoto": "path/to/photo2.jpg",
        "leftPhoto": "path/to/photo2.jpg",
        "rightPhoto": "path/to/photo2.jpg",

      },
    'status': 'Approved'

    },
    {
      "name": "Emily Davis",
      "email": "emily.davis@example.com",
      "mobileNum": "6543210987",
      "currentAddress": "987 Pine Road, Pleasantville",
      "referenceNum1": "5432109876",
      "referenceNum2": "4321098765",
      "client": "Porter",
      "bikeType": "Bicycle",
      "vehicleNum": "MH20EF4567",
      "bikePhotos": {
        "frontPhoto": "path/to/photo1.jpg",
        "backPhoto": "path/to/photo2.jpg",
        "leftPhoto": "path/to/photo2.jpg",
        "rightPhoto": "path/to/photo2.jpg",

      },
    'status': 'Rejected'

    },
    {
      "name": "David Wilson",
      "email": "david.wilson@example.com",
      "mobileNum": "5432109876",
      "currentAddress": "321 Cedar Boulevard, Capital City",
      "referenceNum1": "4321098765",
      "referenceNum2": "3210987654",
      "client": "Rapido",
      "bikeType": "Electric",
      "vehicleNum": "MH22GH1234",
      "bikePhotos": {
        "frontPhoto": "path/to/photo1.jpg",
        "backPhoto": "path/to/photo2.jpg",
        "leftPhoto": "path/to/photo2.jpg",
        "rightPhoto": "path/to/photo2.jpg",

      },
    'status': 'Rejected'

    }
  ]
  constructor(public dialog: MatDialog,){

  }
  view(data?: any): void {
    const dialogRef = this.dialog.open( ViewComponent,{
      data: data,
      width: '1200px',
      position: { top: '100px'},
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  
}
