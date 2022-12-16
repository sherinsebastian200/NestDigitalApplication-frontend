import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { EmployLoginComponent } from './employ-login/employ-login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchEmployComponent } from './search-employ/search-employ.component';
import { ViewEmployComponent } from './view-employ/view-employ.component';
import { ViewEmployeeprofileComponent } from './view-employeeprofile/view-employeeprofile.component';
import { NavbarEmployeeComponent } from './navbar-employee/navbar-employee.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { ViewSecurityprofileComponent } from './view-securityprofile/view-securityprofile.component';
import { NavbarSecurityComponent } from './navbar-security/navbar-security.component';
import { EmployeeLogComponent } from './employee-log/employee-log.component';
import { DailyEmployeelogComponent } from './daily-employeelog/daily-employeelog.component';
import { NavbarLogComponent } from './navbar-log/navbar-log.component';
import { ViewEmployeelogComponent } from './view-employeelog/view-employeelog.component';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { DailyVisitorlogComponent } from './daily-visitorlog/daily-visitorlog.component';
import { ViewVisitorlogComponent } from './view-visitorlog/view-visitorlog.component';


const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"addsecurity",
    component:AddSecurityComponent
  },
  {
    path:"securitylogin",
    component:SecurityLoginComponent
  },
  {
    path:"employlogin",
    component:EmployLoginComponent
  },
  {
    path:"addemploy",
    component:AddEmployComponent
  },
  {
    path:"searchemploy",
    component:SearchEmployComponent
  },
  {
    path:"viewemp",
    component:ViewEmployComponent
  },
  {
    path:"employprofile",
    component:ViewEmployeeprofileComponent
  },
  {
    path:"viewsecurity",
    component:ViewSecurityComponent
  },
  {
    path:"securityprofile",
    component:ViewSecurityprofileComponent
  },
  {
    path:"employlog",
    component:EmployeeLogComponent
  },
  {
    path:"viewdailyemplog",
    component:DailyEmployeelogComponent
  },
  {
    path:"viewallemplog",
    component:ViewEmployeelogComponent
  },
  {
    path:"visitorlog",
    component:VisitorLogComponent
  },
  {
    path:"viewDailyVisitorlog",
    component:DailyVisitorlogComponent
  },
  {
    path:"viewallvisitorlog",
    component:ViewVisitorlogComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SecurityLoginComponent,
    AddEmployComponent,
    AddSecurityComponent,
    EmployLoginComponent,
    NavBarComponent,
    SearchEmployComponent,
    ViewEmployComponent,
    ViewEmployeeprofileComponent,
    NavbarEmployeeComponent,
    NavbarHomeComponent,
    ViewSecurityComponent,
    ViewSecurityprofileComponent,
    NavbarSecurityComponent,
    EmployeeLogComponent,
    DailyEmployeelogComponent,
    NavbarLogComponent,
    ViewEmployeelogComponent,
    VisitorLogComponent,
    DailyVisitorlogComponent,
    ViewVisitorlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
