import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../shared/components/logout-dialog/logout-dialog.component';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private userService: UserService
  ) {}

  'sidebarItems' = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashBoard',
    },
    {
      label: 'Jobs',
      icon: 'work',
      route: '/jobs',
    },
    {
      label: 'Bikes',
      icon: 'directions_bike',
      route: '/ev-bikes',
    },
    {
      label: 'Claims',
      icon: 'description',
      route: '/claims',
    },
    {
      label: 'Advance salary',
      icon: 'account_balance',
      route: '/loan',
    },
    {
      label: 'Onboarded Users',
      icon: 'group',
      route: '/onboard',
    },
    {
      label: 'Profile',
      icon: 'person',
      route: '/profile',
    },
    {
      label: 'Logout',
      icon: 'logout',
      action: 'logout',
    },
  ];

  onMenuSelect(item: any) {
    if (item.route) {
      this.router.navigate([item.route]);
    } else {
      if (item.action === 'logout') {
        this.openLogoutDialog();
      }
    }
  }
  openLogoutDialog() {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUser();
        this.router.navigate(['/login']);
      } else {
        console.log('User canceled logout');
      }
    });
  }
}
