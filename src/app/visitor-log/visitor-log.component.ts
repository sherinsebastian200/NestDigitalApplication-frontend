import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitor-log',
  templateUrl: './visitor-log.component.html',
  styleUrls: ['./visitor-log.component.css']
})
export class VisitorLogComponent {
  name=""
  purpose=""
  whomtomeet=""
  date=""
  entrydatetime=""
  exitdatetime=""
constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"name":this.name,
    "purpose":this.purpose,
    "whomtomeet":this.whomtomeet,date:this.date,
  "entrydatetime":this.entrydatetime,
  "exitdatetime":this.exitdatetime}
  console.log(data)
    this.api.addVisitorLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("log success")
        } else {
          alert("not allowed")
        }
      }
    )
  }
}