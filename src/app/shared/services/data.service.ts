
import { Injectable } from '@angular/core';
import { UsersInformation } from '../interfaces/users.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //OBSERVABLE
  user$ = new BehaviorSubject<any>(null);

  //DUMMY DB ////////////////////////////////////

  //Actividades________________

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
        name: 'Martin Castillo', 
        province: 'Barcelona',
        city: 'Barcelona',
        email: 'martin@test.com',
        phone: 222222222,
        gender: 'M',
        activity: 'Holistic'
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

}




  