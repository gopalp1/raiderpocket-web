import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  
    "sidebarItems"= [
      {
        "label": "Dashboard",
        "icon": "dashboard",
        "route": "/dashBoard"
      },
      {
        "label": "Jobs",
        "icon": "work",
        "route": "/jobs"
      },
      {
        "label": "Bikes",
        "icon": "directions_bike",
        "route": "/ev-bikes"
      },
      {
        "label": "Claims",
        "icon": "description",
        "route": "/claims"
      },
      {
        "label": "Loans",
        "icon": "account_balance",
        "route": "/loan"
      },
      {
        "label": "Onboarded Users",
        "icon": "group",
        "route": "/onboard"
      },
      {
        "label": "Profile",
        "icon": "person",
        "route": "/profile"
      }
    ];

}
