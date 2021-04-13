import { Component, OnInit } from '@angular/core';
import { Student} from '../../../shares/interfaces/student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  students: Student[] = [
    {
      id: 1,
      name: 'Pedro',
      isHonor: true,
      enrollmentDate: 1490742000000,
      teachers: [{name: 'Juana', age: 39},{name: 'Alexa', age: 45}]
    },
    {
      id: 2,
      name: 'Juan',
      isHonor: false,
      teachers: [{name: 'Juana', age: 39},{name: 'Alexa', age: 45}]
    },
    {
      id: 3,
      name: 'Julia',
      isHonor: true,
      enrollmentDate: 1490742000000,
      teachers: null
    },
    {
      id: 4,
      name: 'Ana',
      isHonor: false,
      teachers: null
    },
    {
      id: 5,
      name: 'Teresa',
      isHonor: false,
      teachers: [{name: 'Juana', age: 39},{name: 'Alexa', age: 45}]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
