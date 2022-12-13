import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {
  empcode=""
  secname=""
 username=""
  password=""
  constructor(private api:ApiService){}

  readvalues=()=>{
    let data:any={
      "empcode":this.empcode,"secname":this.secname,"username":this.username, "password":this.password
    }
    console.log(data)
    this.api.addSecurity(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("security added successfully")
          
        } else {
          alert("Something went wrong")
        }
      }
    )
    }
  
  }

