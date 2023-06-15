import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentBioService {
  public StudentBio : any;
  constructor() { }

  private approvalStageMessage = new BehaviorSubject('Basic Approval is required!');
  currentApprovalStageMessage = this.approvalStageMessage.asObservable();

  dummy(Message : any) : void{
    this.approvalStageMessage.next(Message);
  }


  
}
