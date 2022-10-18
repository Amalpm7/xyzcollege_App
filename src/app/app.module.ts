import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AddSComponent } from './add-s/add-s.component';
import { ViewSComponent } from './view-s/view-s.component';
import { AddFComponent } from './add-f/add-f.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"addS",component:AddSComponent
  },
  {
    path:"viewS",component:ViewSComponent
  },
  {
    path:"addF",component:AddFComponent
  }
 
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    AddSComponent,
    ViewSComponent,
    AddFComponent
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
