import { Component, Input, OnInit } from '@angular/core';
import { StudyArea } from 'src/app/shares/interfaces/studyarea';
import { Student } from '../../../shares/interfaces/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studyAreas: StudyArea[] = [
    { key: 'Area1', value: 'Jhon' },
    { key: 'Area2', value: 'Steven' },
    { key: 'Area3', value: 'Nancy' }
  ]

  @Input()
  detail: Student;
  constructor() { }

  ngOnInit(): void {
  }

  toggleIsHonor(isHonor: boolean) {
    if (isHonor) {
      this.detail.enrollmentDate = Date.now();
    }
    
  }

}
