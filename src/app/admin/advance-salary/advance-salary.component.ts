import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'app-advance-salary',
  templateUrl: './advance-salary.component.html',
  styleUrls: ['./advance-salary.component.scss']
})
export class AdvanceSalaryComponent {

    
    constructor(public dialog: MatDialog,){

  }
  displayedColumns: string[] = [
    'name', 
    'dateOfBirth', 
    'phoneNo', 
    'email', 
    'workingCompany', 
    'state', 
    'advanceAmount', 
    'advancePurpose', 
    'status'
  ];

   dataSource = [
    {
      name: "John Doe",
      dateOfBirth: "1990-05-15",
      phoneNo: "9876543210",
      email: "john.doe@example.com",
      workingCompany: "Swiggy",
      address: "123 Main Street, Apartment 4B, Cityville",
      state: "Maharashtra",
      pinCode: "400001",
      advanceAmount: "5000",
      advancePurpose: "Medical emergency",
       status: "Approved"
    },
    {
      name: "Jane Smith",
      dateOfBirth: "1985-10-12",
      phoneNo: "8765432109",
      email: "jane.smith@example.com",
      workingCompany: "Zomato",
      address: "456 Elm Street, Downtown, Los Angeles",
      state: "California",
      pinCode: "90001",
      advanceAmount: "3000",
      advancePurpose: "House rent",
      status: 'Pending'
    },
    {
      name: "Michael Johnson",
      dateOfBirth: "1987-07-20",
      phoneNo: "7654321098",
      email: "michael.johnson@example.com",
      workingCompany: "Uber",
      address: "789 Pine Street, Lincoln Park, Chicago",
      state: "Illinois",
      pinCode: "60614",
      advanceAmount: "8000",
      advancePurpose: "Medical bills",
      status: 'Pending'
    },
    {
      name: "Emily Davis",
      dateOfBirth: "1992-03-11",
      phoneNo: "6543210987",
      email: "emily.davis@example.com",
      workingCompany: "Rapido",
      address: "101 Maple Street, Midtown, Houston",
      state: "Texas",
      pinCode: "77002",
      advanceAmount: "2500",
      advancePurpose: "Car repair",
       status: 'Rejected'
    },
    {
      name: "David Wilson",
      dateOfBirth: "1989-11-30",
      phoneNo: "5432109876",
      email: "david.wilson@example.com",
      workingCompany: "Porter",
      address: "202 Oak Street, SoMa, San Francisco",
      state: "California",
      pinCode: "94105",
      advanceAmount: "4500",
      advancePurpose: "Family expenses",
       status: 'Approved'
    }
  ];
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
