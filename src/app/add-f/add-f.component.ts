import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-f',
  templateUrl: './add-f.component.html',
  styleUrls: ['./add-f.component.css']
})
export class AddFComponent implements OnInit {

  constructor() { }
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
  }

  ngOnInit(): void {
  }

}
