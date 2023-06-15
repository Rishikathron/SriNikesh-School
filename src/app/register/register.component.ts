import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators,NgModel } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerToggleButton : boolean = false;
  FormGrp_submitflag : boolean = false; 
  StudentDetails_Array = new Array;

  StudentForm = new FormGroup(
      {
        first_Name : new FormControl('',Validators.maxLength(10)),
        CGPA : new FormControl(''),
        Department : new FormControl(''),
        age : new FormControl(''),
        Attendance : new FormControl(''),
        FatherName : new FormControl(''),
        MotherName : new FormControl(''),
        Address : new FormControl('')
      }
    );

    FormGrpSubmit(){
      this.FormGrp_submitflag = true;  

      this.StudentDetails_Array.push(this.StudentForm.value);       
      this.StudentForm.reset();
      this.registerToggleButton = false;
      }

  RegisterButton(){
    console.log(this.registerToggleButton);    
    this.registerToggleButton = !this.registerToggleButton;
    console.log(this.registerToggleButton);    
  }

  RegisterStudent(){
     
  }

}
