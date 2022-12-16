import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  empid=""
 leavetype=""
  remarks=""
 fromdate=""
  todate=""
  leaveapplydate=""
  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"empid":this.empid,"leavetype":this.leavetype,"remarks":this.remarks,"fromdate":this.fromdate,
    "todate":this.todate,"leaveapplydate":this.leaveapplydate}
    console.log(data)
    this.api.addLeave(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("leave added successfully")
        } else {
          alert("something wrong")
        }
      }
    )
  }
}