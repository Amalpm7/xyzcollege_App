import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent implements OnInit {

  constructor() { }
  name=""
  roll_no=""
  college=""
  department=""
  blood_group=""
  dob=""
  parent_name=""
  parent_email=""
  guardian_name=""
  guardian_address=""
  readvalue=()=>{
    let data={
      "name":this.name,
      "roll_no":this.roll_no,
      "college":this.college,
      "department":this.department,
      "blood_group":this.blood_group,
      "dob":this.dob,
      "parent_name":this.parent_name,
      "parent_email":this.parent_email,
      "guardian_name":this.guardian_name,
      "guardian_address":this.guardian_address
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
