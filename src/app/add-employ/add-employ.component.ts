import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css']
})
export class AddEmployComponent {
  

  empcode=""
  empname=""
  designation=""
  salary=""
  username=""
  password=""

  constructor(private api:ApiService){}
  

  readValues=()=>{
    let data:any={
      "empcode":this.empcode,
      "empname":this.empname,
      "designation":this.designation,
      "salary":this.salary,
      "username":this.username,
      "password":this.password
    }
    
    this.api.addEmploy(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("employ  details added successfully")
          
        } else {
          alert("Something went wrong")
        }
      }
    )
    }
  
  }





