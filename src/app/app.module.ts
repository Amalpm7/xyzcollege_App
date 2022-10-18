import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  }
 
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
