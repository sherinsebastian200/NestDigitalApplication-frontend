import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-leaveall',
  templateUrl: './view-leaveall.component.html',
  styleUrls: ['./view-leaveall.component.css']
})
export class ViewLeaveallComponent {
  constructor(private api:ApiService){
    api.vieWAllLeave().subscribe(
      (response:any)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
}