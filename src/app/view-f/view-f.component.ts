import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-f',
  templateUrl: './view-f.component.html',
  styleUrls: ['./view-f.component.css']
})
export class ViewFComponent implements OnInit {

  constructor() { }
  viewFaculty=[

    {'name':'Pheobe','department':'Computer Science','designation':' Professor','dob':'1999-05-09','eduQuali':'MCA','address':'house 1','phone':9534668210,'doj':'2022-11-18'},

    {'name':'Joe','department':'Mechanical','designation':'Senior Professor','dob':'1997-11-23','eduQuali':'MTech','address':'house 2','phone':9574545900,'doj':'2022-11-16'},

    {'name':'Julie','department':'Electronics','designation':'Asst. Professor','dob':'1994-12-25','eduQuali':'MSc','address':'house 3','phone':6652090023,'doj':'2022-04-19'},

    {'name':'Emily','department':'Computer Science','designation':'Guest Leture','dob':'1993-06-08','eduQuali':'Phd','address':'house 4','phone':7236542300,'doj':'2021-12-12'},

    {'name':'Tesa','department':'Civil','designation':'Asst. Professor','dob':'1999-10-15','eduQuali':'MTech','address':'house 5','phone':435973044,'doj':'2022-05-03'},

  ]

  ngOnInit(): void {
  }

}
