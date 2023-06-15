import { Component, Input } from '@angular/core';
import {StudentBioService} from '../student-bio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  @Input() StudentDetails_Array : any;
  temp : any;

  constructor (private StudentBioService : StudentBioService, private router: Router){}

  ngOnChanges(): void {
    console.log(this.StudentDetails_Array);    
  }

  btnclick(){   
    this.StudentBioService.dummy(this.StudentDetails_Array);
    this.router.navigateByUrl("/StudentBio");
  }
  
}
