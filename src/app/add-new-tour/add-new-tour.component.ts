import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../shared/validators/customValidators';


@Component({
  selector: 'app-add-new-tour',
  templateUrl: './add-new-tour.component.html',
  styleUrls: ['./add-new-tour.component.css']
})

export class AddNewTourComponent {

  public profileForm: FormGroup;
   constructor(){
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5), new CustomValidators().customTextFieldValidator(/bob/i)]),
      lastName: new FormControl('', [Validators.required])
    });
   }

  test() {
    console.log(JSON.stringify(this.profileForm.value));
    alert('here2');
  }

}


