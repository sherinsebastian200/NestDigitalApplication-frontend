import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {
  username=""
  password=""
  constructor(private route:Router){}
  readValues=()=>{
    let data:any={
      "username":this.username,"password":this.password
    }
    console.log(data)


  }
}