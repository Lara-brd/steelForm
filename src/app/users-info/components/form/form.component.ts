import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  activities:string[] = this.dataSvc.activities;

  public myForm:FormGroup = this.fb.group({
    province: ['Barcelona',[Validators.required] ],
    name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.validatorsSvc.firstNameAndLastNamePattern)]],
    address: ['1600 Amphitheatre Pkwy', Validators.required],
    email:['', [Validators.required, Validators.pattern(this.validatorsSvc.email)]],
    phone: ['', [Validators.required, Validators.pattern(this.validatorsSvc.mobilePhone)]],
    city: ['', [Validators.required, Validators.minLength(2)]],
    gender: ['M', [Validators.required]],
    activity: ['', Validators.required]
  })

  ////////////////////////////////////

  constructor( 
    private fb: FormBuilder,
    private validatorsSvc:ValidatorsService,
    private dataSvc:DataService
    ){}

  //
  //Recibe el campo del input para seleccionar el mensaje dependiendo del error.
  getFieldError(field:string): string | null {

    if(!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};

      for( const key of Object.keys(errors)){
        switch(key){
          case 'required':
            return 'Required Field';
          case 'minlength':
            return `Minimum length ${ errors ['minlength'].requiredLength} characters`;
          case 'pattern':
            return 'Enter the field correctly'
        }
      }
      return null;
  }
  

  onSave(){
    if(this.myForm.invalid){
      return
    }
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();

  }
}
