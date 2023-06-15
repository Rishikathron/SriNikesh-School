import { Component } from '@angular/core';
import {StudentBioService} from '../student-bio.service';

@Component({
  selector: 'app-student-bio',
  templateUrl: './student-bio.component.html',
  styleUrls: ['./student-bio.component.css']
})
export class StudentBioComponent {

  StudentBio : any;
  constructor (private StudentBioService : StudentBioService){}
  

  ngOnInit(){
    this.StudentBioService.currentApprovalStageMessage.subscribe(i => this.StudentBio = i ) ;
    console.log(this.StudentBio);    
  }
  

}
