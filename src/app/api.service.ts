import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addSecurity=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",DataToSend)
  }
  securityLogin=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/securitylogin",DataToSend)
  }
  empLogin=(data:any)=>
  {
    return this.http.post("http://localhost:8080/employlogin",data)
  }
  addEmploy=(DataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addemploy",DataToSend)
  }

  searchEmploy=(data:any)=>
  {
    return this.http.post("http://localhost:8080/searchemploy",data)
  }

  deleteEmploy=(data:any)=>
  {
    return this.http.post("http://localhost:8080/deleteemploy",data)
  }
  vieWEmploy=()=>
  {
    return this.http.get("http://localhost:8080/viewemp")
  }
  employeeViewProfile=(data:any)=>
  {
    return this.http.post("http://localhost:8080/employprofile",data)
  }
  vieWSecurity=()=>
  {
    return this.http.get("http://localhost:8080/viewsecurity")
  }
  securityViewProfile=(data:any)=>
  {
    return this.http.post("http://localhost:8080/securityprofile",data)
  }
  addEmpLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/employlog",data)
  }
  vieWDailyEmployLog=(data:any)=>
  {
    return this.http.post("http://localhost:8080/viewdailyemplog",data)
  }

 
  }