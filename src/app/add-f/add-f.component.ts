import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-f',
  templateUrl: './add-f.component.html',
  styleUrls: ['./add-f.component.css']
})
export class AddFComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  department=""
  designation=""
  dob=""
  eduQuali=""
  address=""
  phone=""
  doj=""
  readvalue=()=>{
    let data={
      "name":this.name,
      "department":this.department,
      "designation":this.designation,
      "dob":this.dob,
      "eduQuali":this.eduQuali,
      "address":this.address,
      "phone":this.phone,
      "doj":this.doj
    }
    console.log(data)
    this.myapi.putDataF(data).subscribe(
        (response)=>{
          
        }
    )
  }

  ngOnInit(): void {
  }

}
