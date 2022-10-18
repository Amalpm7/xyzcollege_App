import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-s',
  templateUrl: './view-s.component.html',
  styleUrls: ['./view-s.component.css']
})
export class ViewSComponent implements OnInit {

  constructor() { }
  viewStudent=[

    {'name':'Amal','roll_no':12,'admission_no':223,'college':'ABC','department':'Computer Science','bloodGroup':'A+','dob':'2001-12-07','parentName':'xyz','parentEmail':'xyz@gmail.com','guardianName':'pqr','guardianAddress':'abc street'},

    {'name':'Gunther','roll_no':9,'admission_no':453,'college':'QWR','department':'Civil','bloodGroup':'A-','dob':'2001-05-14','parentName':'xyz','parentEmail':'xyz@gmail.com','guardianName':'xyz','guardianAddress':'xyz street'},

    {'name':'Bob','roll_no':7,'admission_no':234,'college':'MSN','department':'Civil','bloodGroup':'O+','dob':'2000-07-25','parentName':'xyz','parentEmail':'xyz@gmaisdf.cn','guardianName':'mno','guardianAddress':'pqr street'},

    {'name':'Bonney','roll_no':43,'admission_no':722,'college':'BBC','department':'Electical','bloodGroup':'AB-','dob':'2000-01-04','parentName':'pqr','parentEmail':'pqr@gmail.com','guardianName':'qwt','guardianAddress':'lmn street'},

    {'name':'Joshua','roll_no':21,'admission_no':335,'college':'BBC','department':'Computer Science','bloodGroup':'O-','dob':'2003-06-29','parentName':'mno','parentEmail':'mno@gmailc.pc','guardianName':'mno','guardianAddress':'pqz street'},

  ]

  ngOnInit(): void {
  }

}
