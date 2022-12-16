import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-log',
  templateUrl: './employee-log.component.html',
  styleUrls: ['./employee-log.component.css']
})
export class EmployeeLogComponent {
  empid=""
  date=""
  entrydatetime=""
  exitdatetime=""
constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"empid":this.empid,
    "date":this.date,
    "entrydatetime":this.entrydatetime,
    "exitdatetime":this.exitdatetime }
    console.log(data)
    this.api.addEmpLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("successfully added")
        } else {
          alert("wrong data")
        }
      }
    )
  }
}
