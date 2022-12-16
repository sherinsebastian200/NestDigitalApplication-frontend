import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-securityprofile',
  templateUrl: './view-securityprofile.component.html',
  styleUrls: ['./view-securityprofile.component.css']
})
export class ViewSecurityprofileComponent {
  securityId:any=""
  constructor(private api:ApiService){
    this.securityId=localStorage.getItem("userInfos")
    let data:any={
        "id":this.securityId
    }
    this.api.securityViewProfile(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
  data:any=[]
}
