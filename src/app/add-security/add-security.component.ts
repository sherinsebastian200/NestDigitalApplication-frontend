import { Component } from '@angular/core';

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


  readvalues=()=>{
    let data:any={
      "empcode":this.empcode,"secname":this.secname,"username":this.username, "password":this.password
    }
    console.log(data)




 
  }
  }

