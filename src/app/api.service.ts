import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getdata=()=>{
    return this.http.get("http://localhost:8080/studentView")
  }
  putData=(data:any)=>{
    return this.http.post("http://localhost:8080/studentAdd",data)
  }
  deleteData=(data:any)=>{
    return this.http.post("http://localhost:8080/studentDelete",data)
  }
  searchData=(data:any)=>{
    return this.http.post("http://localhost:8080/searchStudent",data)
  }
  getdataF=()=>{
    return this.http.get("http://localhost:8080/facultyView")
  }
  putDataF=(data:any)=>{
    return this.http.post("http://localhost:8080/facultyAdd",data)
  }
  deleteDataF=(data:any)=>{
    return this.http.post("http://localhost:8080/facultyDelete",data)
  }
  searchDataF=(data:any)=>{
    return this.http.post("http://localhost:8080/facultySearch",data)
  }
}
