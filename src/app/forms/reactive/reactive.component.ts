import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  registerUser:any []=[];
  registerForm: FormGroup= this.formBuilder.group({
    fName: new FormControl('',Validators.required),
    lName: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    zipcode: new FormControl(0),
  });
  constructor(private formBuilder:FormBuilder){}
  submit(){
    console.log(this.registerForm.value);
  }
}
