import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SecurityLoginComponent } from './security-login/security-login.component';

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
    SecurityLoginComponent
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
