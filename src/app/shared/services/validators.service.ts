import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  public firstNameAndLastNamePattern:string = '([a-zA-Z]+) ([a-zA-Z]+)';
  //TODO mejorar la expresión regular para movil (introducir prefijo)
  public mobilePhone:string = '[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}';
  public email:string = "[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"

}


