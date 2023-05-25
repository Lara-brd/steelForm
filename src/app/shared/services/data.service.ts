
import { Injectable } from '@angular/core';
import { UsersInformation } from '../interfaces/users.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //OBSERVABLE ( get y set)
  private _user$ = new BehaviorSubject<any>(null);

  get user$(){
    return this._user$;
  }
  setUser(user:UsersInformation){
    this._user$.next(user);
  }

  
  //DUMMY DB ////////////////////////////////////

  //Dummy activities Data________________

  private _activities:string[] = [ 'Group cycling', 'Holistic', 'Strench and conditioning', 'High Intensity'];

  get activities(){
    return [...this._activities]
  }

  //Dummy users Data, getter y setter________

    private _ELEMENT_DATA = [
      {
  
        name: 'Marta Castillejo', 
        province: 'Barcelona',
        city: 'Gavà',
        email: 'marta@test.com',
        phone: 222556699,
        gender: 'F',
        activity: 'Group cycling'
      },
      { 
        name: 'Lucas Amaro', 
        province: 'Barcelona',
        city: 'Barcelona',
        email: 'lucas@test.com',
        phone: 23366959584,
        gender: 'M',
        activity: 'Holistic'
      },
      { 
        name: 'Calos Tello', 
        province: 'Badalona',
        city: 'Barcelona',
        email: 'carlos@test.com',
        phone: 989663366,
        gender: 'M',
        activity: 'Strench and conditioning'
      },
      { 
        name: 'Silvia Ricart', 
        province: 'Viladecans',
        city: 'Barcelona',
        email: 'silvia@test.com',
        phone: 444125258,
        gender: 'F',
        activity: 'Strench and conditioning'
      },
      { 
        name: 'Valeria Vernis', 
        province: 'Barcelona',
        city: 'Barcelona',
        email: 'valeria@test.com',
        phone: 222548484,
        gender: 'F',
        activity: 'Strench and conditioning'
      },
   
    ];

    get element_data(){
      return this._ELEMENT_DATA
    }

    setNewData(data:UsersInformation){
      this._ELEMENT_DATA = [...this._ELEMENT_DATA, data]
    }

  //__________________________

  //////////////////////////

  constructor() { }

  //Eliminar elementos de la tabla
  //busco el indice recogiendo el objeto user
  //lo elimino con splice
  deleteUser(user:UsersInformation){
    const i = this._ELEMENT_DATA.indexOf(user);
    this._ELEMENT_DATA.splice(i,1);
  }

}




  