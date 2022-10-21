import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  readvalue=()=>{
    let data={
      "name":this.name
      
    }
    console.log(data)
    this.myapi.searchData(data).subscribe(
      (response)=>{
        this.studentData=response
      }
    )
  }
  studentData:any=[]

  ngOnInit(): void {
  }

}
