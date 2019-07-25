import { AuthGuardService } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadService } from './preload.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'backoffice',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './content/login/login.module#LoginModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'signup',
    loadChildren: './content/signup/signup.module#SignupModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'backoffice',
    loadChildren: './content/backoffice/backoffice.module#BackofficeModule',
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'backoffice',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadService})],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule {
}
