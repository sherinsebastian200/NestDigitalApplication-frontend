import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employ-login',
  templateUrl: './employ-login.component.html',
  styleUrls: ['./employ-login.component.css']
})
export class EmployLoginComponent {

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
