import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/shares/interfaces/student';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent implements OnInit {

  @Input()
  items: Student[];

  constructor() { }

  ngOnInit(): void {
  }

  honorCount():number {
    if (!this.items) return;
    return this.items.filter((student: Student) => {
      return student.isHonor;
    }).length;
  }

}
