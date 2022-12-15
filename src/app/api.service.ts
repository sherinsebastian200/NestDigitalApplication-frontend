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
 
  }