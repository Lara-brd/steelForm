import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersHomeComponent } from './pages/users-home/users-home.component';

const routes:Routes = [
  {
    path:'',
    children: [
      { path:'home', component: UsersHomeComponent},
      { path:'**', redirectTo:'home'}
    ] 

  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule { }
