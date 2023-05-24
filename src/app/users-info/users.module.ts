import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersHomeComponent } from './pages/users-home/users-home.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [
    UsersHomeComponent,
    FormComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
