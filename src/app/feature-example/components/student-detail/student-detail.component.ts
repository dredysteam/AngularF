import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/shares/interfaces/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input()
  detail: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
