import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employeelog',
  templateUrl: './view-employeelog.component.html',
  styleUrls: ['./view-employeelog.component.css']
})
export class ViewEmployeelogComponent {
  constructor(private api:ApiService){
    api.vieWEmployLog().subscribe(
      (response:any)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
}