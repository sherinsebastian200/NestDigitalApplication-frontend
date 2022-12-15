import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employeeprofile',
  templateUrl: './view-employeeprofile.component.html',
  styleUrls: ['./view-employeeprofile.component.css']
})
export class ViewEmployeeprofileComponent {
  empid:any=""
  data:any=[]
constructor(private api:ApiService){

  this.empid=localStorage.getItem("userInfo")
    let data:any={
      "id":this.empid
    }
    this.api.employeeViewProfile(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
 
}