import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-s',
  templateUrl: './view-s.component.html',
  styleUrls: ['./view-s.component.css']
})
export class ViewSComponent implements OnInit {

  constructor(private myapi:ApiService) { this.putViewData()}
  putViewData=()=>{
    this.myapi.getdata().subscribe(
      (data)=>{
        this.viewStudent=data
      }
    )
  }
  deleteData=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteData(data).subscribe(
      (resp)=>{
        alert("Deleted")
      }
    )
    this.putViewData()
  }
  viewStudent:any=[]

  ngOnInit(): void {
  }

}
