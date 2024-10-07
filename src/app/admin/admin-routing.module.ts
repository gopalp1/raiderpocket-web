import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OnbardedUsersComponent } from './onbarded-users/onbarded-users.component';
import { AdvanceSalaryComponent } from './advance-salary/advance-salary.component';
import { ClaimsRequestsComponent } from './claims-requests/claims-requests.component';
import { EvBikesComponent } from './ev-bikes/ev-bikes.component';
import { RequestsModalComponent } from '../shared/components/requests-modal/requests-modal.component';
import { JobsRequestComponent } from './jobs-request/jobs-request.component';

const routes: Routes = [
  {path:'',
    component:AdminComponent,
    children:[
      {path:'',
        component:DashboardComponent
      },
      {path:'dashBoard',
        component:DashboardComponent
      },
      {path:'jobs',
        component:JobsRequestComponent
      },
      {path:'ev-bikes',
        component:EvBikesComponent
      },
      {path:'claims',
        component:ClaimsRequestsComponent
      },
      {path:'loan',
        component:AdvanceSalaryComponent
      },
      {path:'onboard',
        component:OnbardedUsersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
