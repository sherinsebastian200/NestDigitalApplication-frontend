import { Component } from '@angular/core';
import { Router } from '@angular/router';

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


  readvalues=()=>{
    let data:any={
      "empcode":this.empcode,"empname":this.empname,"designaiton":this.designation,"salary":this.salary,"username":this.username, "password":this.password
    }
    console.log(data)




 
  }
  }
