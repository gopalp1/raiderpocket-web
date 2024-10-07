import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data = [
    {
      label: 'ONBOARD',
      action: 'onBoard',
      image: '../../assets/images/loan.png',
      sublabel:'Onboarded Users',
      route:'/onboard'

    },
    {
      label: 'JOBS',
      action: 'jobs',
      image: '../../assets/images/jobs.png',
      sublabel:'Requests for Jobs',
      route: "/jobs"

    },
    {
      label: 'EV-BIKES',
      action: 'evbikes',
      image: '../../assets/images/evbikes.png',
      sublabel:'Requests for EV bikes',
      route: "/ev-bikes"

    },
    {
      label: 'CLAIMS',
      action: 'claim',
      image: '../../assets/images/claim.png',
      sublabel:'Requests for Claims',
      route: "/claims"


    },
    {
      label: 'Advance Salary',
      action: 'claim',
      image: '../../assets/images/claim.png',
      sublabel:'Requests for Advance-salary',
      route: "/loan"

    },
   
  ];


  
  
    constructor(
      public dialog: MatDialog,
      private router: Router,
  
    ) {}
  
    ngOnInit(): void {
    }
  
 
  
  
  
}
