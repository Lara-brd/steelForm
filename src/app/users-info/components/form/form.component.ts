import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  newUserName:string =''
  //LLamo al formgroupDirective para poder resetear el formulario
  @ViewChild(FormGroupDirective)
  FormDirective!:FormGroupDirective;

  activities:string[] = this.dataSvc.activities;

  public myForm:FormGroup = this.fb.group({
    province: ['Barcelona',[Validators.required] ],
    name: ['Maraia Luces', [Validators.required, Validators.minLength(3), Validators.pattern(this.validatorsSvc.firstNameAndLastNamePattern)]],
    email:['jljjlk@dfdf.com', [Validators.required, Validators.pattern(this.validatorsSvc.email)]],
    phone: ['', [Validators.required, Validators.pattern(this.validatorsSvc.mobilePhone)]],
    city: ['', [Validators.required, Validators.minLength(2)]],
    gender: ['M', [Validators.required]],
    activity: ['cROSss fit', Validators.required]
  })

  ////////////////////////////////////

  constructor( 
    private fb: FormBuilder,
    private validatorsSvc:ValidatorsService,
    private dataSvc:DataService
    ){}

    
  ngOnInit(): void {
   
  }

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
      this.myForm.markAllAsTouched();
      return
    }

    this.dataSvc.setUser(this.myForm.value)
    this.newUserName = this.myForm.controls['name'].value;
 
    //ResetForm permite resetear todos los campos del formulario.
    this.FormDirective.resetForm({province:'Barcelona', gender:'M'});
    setTimeout(()=>{                          
      this.newUserName = '';
  }, 3000);
    
  }




}
