import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-daily-employeelog',
  templateUrl: './daily-employeelog.component.html',
  styleUrls: ['./daily-employeelog.component.css']
})
export class DailyEmployeelogComponent {
  constructor(private api:ApiService){
    api.vieWEmploy().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  date=""
  searchData:any=[]
  readValue=()=>
  {
    let data:any={"date":this.date}
    console.log(data)
    this.api.vieWDailyEmployLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0)
        {
          alert("invalid")
        }
        else{
          this.data=[];
          this.searchData=response
        }
      }
    )

  }
  data:any=[]
}