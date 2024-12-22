import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';
import { AuthComponent } from './auth/auth.component';
import { PrivateGuard } from './core/guards/private-guard';
import { PublicGuard } from './core/guards/public-guard';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
  },
  { path: 'login', component: AuthComponent },
  { path: 'privay_policy', component: PrivacyPolicyComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [PrivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
