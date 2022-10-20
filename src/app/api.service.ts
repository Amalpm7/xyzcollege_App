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
  

}
