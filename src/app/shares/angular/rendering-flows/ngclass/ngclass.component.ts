import { Component, OnInit } from '@angular/core';
import { Student } from '../../../interfaces/student';
@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
   students: Student[] = [
    {
      id: 1,
      name: 'Pedro',
      isHonor:true
    },
    {
      id: 2,
      name: 'Juan',
      isHonor:false
    },
    {
      id: 3,
      name: 'Julia',
      isHonor:true
    },
    {
      id: 4,
      name: 'Ana',
      isHonor:false
    },
    {
      id: 5,
      name: 'Teresa',
      isHonor:false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
