import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _activities:string[] = [ 'Group cycling', 'Holistic', 'Strench and conditioning', 'High Intensity'];

  get activities(){
    return [...this._activities]
  }

  constructor() { }
}
