import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-faculty',
  templateUrl: './search-faculty.component.html',
  styleUrls: ['./search-faculty.component.css']
})
export class SearchFacultyComponent implements OnInit {

  constructor(private myApi:ApiService) { }
  name=""
  readValue=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
    this.myApi.searchDataF(data).subscribe(
      (resp)=>{
        this.searchFaculty=resp
      }
    )

  }
  searchFaculty:any=[]
  

  ngOnInit(): void {
  }

}
