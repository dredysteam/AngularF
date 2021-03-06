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
      isHonor: true,
      enrollmentDate: 1490742000000
    },
    {
      id: 2,
      name: 'Juan',
      isHonor: false,
      enrollmentDate: 1490742000000
    },
    {
      id: 3,
      name: 'Julia',
      isHonor: true,
      enrollmentDate: 1490742000000
    },
    {
      id: 4,
      name: 'Ana',
      isHonor: false,
      enrollmentDate: 1490742000000
    },
    {
      id: 5,
      name: 'Teresa',
      isHonor: false,
      enrollmentDate: 1490742000000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
