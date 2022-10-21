import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-f',
  templateUrl: './view-f.component.html',
  styleUrls: ['./view-f.component.css']
})
export class ViewFComponent implements OnInit {

  constructor(private myapi:ApiService) { this.putViewData()}
  putViewData=()=>{
    this.myapi.getdataF().subscribe(
      (data)=>{
        this.viewFaculty=data
      }

    )
  }
  deleteDataF=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteDataF(data).subscribe(

    )
    this.putViewData()
  }
  viewFaculty:any=[]

  ngOnInit(): void {
  }

}
