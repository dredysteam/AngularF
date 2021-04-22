import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../../shares/interfaces/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @Input()
  detail: Student;
  constructor() { }

  ngOnInit(): void {
  }

}
