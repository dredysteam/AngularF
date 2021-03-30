import { Component, OnInit } from '@angular/core';
import { Student } from '../../../interfaces/student';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

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
