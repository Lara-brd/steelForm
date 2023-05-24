import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersInformation } from 'src/app/shared/interfaces/users.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit, OnDestroy{

  subscription:any;

  user!:UsersInformation[];

  // Nombre de cada columna
  displayedColumns = [
    'name',
    'province',
    'city',
    'email',
    'phone',
    'gender',
    'activity',
    'star',
  ];

  dataSource: UsersInformation[]= this.dataSvc.element_data;

  constructor( private dataSvc:DataService){}


  ngOnInit(): void {
    //observable de la nueva muestra que trae la nueva array de objetos
    this.subscription = this.dataSvc.user$.subscribe(data => {
      this.user = data;
      if(data !== null){
        this.dataSvc.setNewData(data);
        this.dataSource = this.dataSvc.element_data;
      }
    })
  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}




