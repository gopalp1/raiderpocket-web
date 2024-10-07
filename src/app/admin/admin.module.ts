import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { JobsRequestComponent } from './jobs-request/jobs-request.component';
import { ClaimsRequestsComponent } from './claims-requests/claims-requests.component';
import { OnbardedUsersComponent } from './onbarded-users/onbarded-users.component';
import { AdvanceSalaryComponent } from './advance-salary/advance-salary.component';
import { EvBikesComponent } from './ev-bikes/ev-bikes.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AdvanceSalaryModule } from './advance-salary/advance-salary.module';
import { JobsRequestModule } from './jobs-request/jobs-request.module';
import { OnbardedUsersModule } from './onbarded-users/onbarded-users.module';
import { ClaimsRequestsModule } from './claims-requests/claims-requests.module';
import { EvBikesModule } from './ev-bikes/ev-bikes.module';
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    JobsRequestComponent,
    ClaimsRequestsComponent,
    OnbardedUsersComponent,
    AdvanceSalaryComponent,
    EvBikesComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,        
    SharedModule,
    AdvanceSalaryModule,JobsRequestModule,
    OnbardedUsersModule,
    ClaimsRequestsModule,
    EvBikesModule
  ]
})
export class AdminModule { }
