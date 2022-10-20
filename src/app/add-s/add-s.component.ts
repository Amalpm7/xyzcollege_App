import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  roll_no=""
  admission_no=""
  college=""
  department=""
  bloodGroup=""
  dob=""
  parentName=""
  parentEmail=""
  guardianName=""
  guardianAddress=""
  readvalue=()=>{
    let data={
      "name":this.name,
      "roll_no":this.roll_no,
      "admission_no":this.admission_no,
      "college":this.college,
      "department":this.department,
      "bloodGroup":this.bloodGroup,
      "dob":this.dob,
      "parentName":this.parentName,
      "parentEmail":this.parentEmail,
      "guardianName":this.guardianName,
      "guardianAddress":this.guardianAddress
    }
    console.log(data)
    this.myapi.putData(data).subscribe(
      (response)=>{

      }
    )
    alert("Succesfully Added")
    this.name=""
    this.roll_no=""
    this.admission_no=""
    this.college=""
    this.department=""
    this.bloodGroup=""
    this.dob=""
    this.parentName=""
    this.parentEmail=""
    this.guardianName=""
    this.guardianAddress=""
  }

  ngOnInit(): void {
  }

}
