import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UsersInformation } from 'src/app/shared/interfaces/users.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit, OnDestroy{

  subscription:any;

  //recoje la tabla para poder modificarla al borrar usuarios.
  @ViewChild('tabla') tablaUsuarios!:MatTable<any>;

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
    //observable que trae información del nuevo user del form y lo añade al array de clientes
    this.subscription = this.dataSvc.user$.subscribe(data => {
      this.user = data;
      if(data !== null){
        this.dataSvc.setNewData(data);
        this.dataSource = this.dataSvc.element_data;
      }
    })
  
  }

  deleteUser(element:UsersInformation){
    //borro el elemento del array 
    //utilizao el método renderRows para actualizar la lista cada vez que hay un cambio.
    this.dataSvc.deleteUser(element);
    this.tablaUsuarios.renderRows();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}




