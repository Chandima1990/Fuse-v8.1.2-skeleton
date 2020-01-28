import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SampleComponent } from './main/sample/sample.component';
import { UserManagementComponent } from './main/user-management/user-management.component';
import { HomeComponent } from './main/home/home.component';


const routes: Routes = [
  { path: 'sample', component: SampleComponent, canActivate: [AuthGuard] },
  { path: 'usermanagement', component: UserManagementComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
