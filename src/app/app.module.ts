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

const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"securitylogin",
    component:SecurityLoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SecurityLoginComponent,
    AddEmployComponent,
    AddSecurityComponent,
    EmployLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
