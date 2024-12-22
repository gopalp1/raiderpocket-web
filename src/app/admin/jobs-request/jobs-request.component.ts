import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewComponent } from './view/view.component';
import { urlConstants } from 'src/app/core/constants.ts/url';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-jobs-request',
  templateUrl: './jobs-request.component.html',
  styleUrls: ['./jobs-request.component.scss'],
})
export class JobsRequestComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'phoneNo',
    'companyName',
    'jobType',
    'city',
    'area',
    'status',
  ];
  dataSource = [
    {
      jobType: 'full-time',
      name: 'John Doe',
      phoneNo: '9876543210',
      city: 'New York',
      area: 'Manhattan',
      companyName: 'Swiggy',
      status: 'Pending',
    },
    {
      jobType: 'part-time',
      name: 'Jane Smith',
      phoneNo: '8765432109',
      city: 'Los Angeles',
      area: 'Downtown',
      companyName: 'Zomato',
      status: 'Pending',
    },
    {
      jobType: 'full-time',
      name: 'Michael Johnson',
      phoneNo: '7654321098',
      city: 'Chicago',
      area: 'Lincoln Park',
      companyName: 'Swiggy',

      status: 'Approved',
    },
    {
      jobType: 'part-time',
      name: 'Emily Davis',
      phoneNo: '6543210987',
      city: 'Houston',
      area: 'Midtown',
      companyName: 'Zomato',

      status: 'Pending',
    },
    {
      jobType: 'full-time',
      name: 'David Wilson',
      phoneNo: '5432109876',
      city: 'San Francisco',
      area: 'SoMa',
      companyName: 'Swiggy',

      status: 'Pending',
    },
  ];
  constructor(public dialog: MatDialog, private apiService: HttpService) {}
  view(data?: any): void {
    const dialogRef = this.dialog.open(ViewComponent, {
      data: data,
      width: '1200px',
      position: { top: '100px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const payload = {
      url: urlConstants.GET_JOBS,
    };

    this.apiService.get(payload).then((resp) => {
      console.log(resp, 'resp');
    });
  }
}
