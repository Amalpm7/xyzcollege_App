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
import { ViewFComponent } from './view-f/view-f.component';
import { HttpClientModule } from "@angular/common/http";
import { SearchStudentComponent } from './search-student/search-student.component';
import { SearchFacultyComponent } from './search-faculty/search-faculty.component';

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
  },
  {
    path:"viewF",component:ViewFComponent
  },
  {
    path:"search",component:SearchStudentComponent
  },
  {
    path:"searchF",component:SearchFacultyComponent
  }
 
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    AddSComponent,
    ViewSComponent,
    AddFComponent,
    ViewFComponent,
    SearchStudentComponent,
    SearchFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
