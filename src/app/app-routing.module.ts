import { AssessmentComponent } from './assessment/assessment.component';
import { LoginComponent } from './login/login.component';
import { AuthenGuard } from './authen.guard';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', component: UserComponent, canActivate: [AuthenGuard] },
  { path: 'other', redirectTo: '/user' },
  { path: 'login', component: LoginComponent },
  { path: 'assessment', component: AssessmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
