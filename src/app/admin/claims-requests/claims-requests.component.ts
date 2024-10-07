import { Component } from '@angular/core';
import { ViewComponent } from './view/view.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-claims-requests',
  templateUrl: './claims-requests.component.html',
  styleUrls: ['./claims-requests.component.scss']
})
export class ClaimsRequestsComponent {
  displayedColumns: string[] = ['patientName','hospitalName', 'city', 'area', 'billValue', 'status' ] ;
  filteredData: any;

  hospitalBill=[{
    'claimType':'Hospital-bill',
    "hospitalName": "City Hospital",
    "city": "San Francisco",
    "area": "Downtown",
    "billValue": "5000",
    "billPhoto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLUo00KuB3YLxfhcS5_FbNbk3uO31TcBG2Q&s",
    
    "patientName": "John Doe",
    "admissionDate": "2023-09-01",
    "dischargeDate": "2023-09-10",
    'status': 'Pending'

  },
  {
    'claimType':'Hospital-bill',
    "hospitalName": "General Hospital",
    "city": "Los Angeles",
    "area": "Westside",
    "billValue":"3500",
    "billPhoto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLUo00KuB3YLxfhcS5_FbNbk3uO31TcBG2Q&s",
    "patientName": "Jane Smith",
    "admissionDate": "2023-08-20",
    "dischargeDate": "2023-08-27",
    'status': 'Approved'


  },]
  dataSource: any=this.hospitalBill
  selectedValue= 'hospital';

  bikeService=[
    {
    'claimType':'Bike-service',
      "bikeServiceName": "Yamaha Motors",
      "city": "Houston",
      "area": "Midtown",
      "billValue": "250",
      "photo": "path/to/bikeService4.jpg",
      "customerName": "Alex Lee",
      "serviceDate": "2023-09-15",
      "bikeType": "Electric",
      "vehicleNum": "TX09EV1234",
      'status': 'Pending'
    },
    {
    'claimType':'Bike-service',
      "bikeServiceName": "Honda Service",
      "city": "Seattle",
      "area": "Capitol Hill",
      "billValue": "300",
      "photo": "path/to/bikeService4.jpg",
      "customerName": "Linda White",
      "serviceDate": "2023-08-05",
      "bikeType": "Scooter",
      "vehicleNum": "WA12XY5678",
      'status': 'Pending'


    }
  ]

  mobileService=[
    {
    'claimType':'Mobile-service',

      "mobileServiceName": "Verizon",
      "city": "New York",
      "area": "Manhattan",
      "billValue": "1200",
      "billPhoto": "path/to/mobileBill1.jpg",
      "customerName": "Michael Johnson",
      'status': 'Pending'
    },
    {
    'claimType':'Mobile-service',
      "mobileServiceName": "T-Mobile",
      "city": "Los Angeles",
      "area": "Hollywood",
      "billValue": "800",
      "billPhoto": "path/to/mobileBill2.jpg",
      "customerName": "Sophia Williams",
      'status': 'Pending'


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

  onToggleChange(event: any) {
     this.selectedValue = event.value;
     if (this.selectedValue === 'bike') {
      this.displayedColumns = ['customerName','bikeServiceName', 'city', 'area', 'billValue', 'serviceDate', 'bikeType', 'vehicleNum', 'status'];
      this.dataSource = this.bikeService;
    } else if (this.selectedValue === 'mobile') {
      this.displayedColumns = ['name','mobileServiceName', 'city', 'area', 'billValue', 'status'];
      this.dataSource = this.mobileService;
    }else{
        this.displayedColumns = ['patientName','hospitalName', 'city', 'area', 'billValue',  'status'];
      this.dataSource = this.hospitalBill;

    }
  }
}
