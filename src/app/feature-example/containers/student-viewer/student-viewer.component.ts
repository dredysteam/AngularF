import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shares/interfaces/student';
import { StudentDashboardService } from '../../student-dashboard.service';

@Component({
  selector: 'app-student-viewer',
  templateUrl: './student-viewer.component.html',
  styleUrls: ['./student-viewer.component.css']
})
export class StudentViewerComponent implements OnInit {

  student:Student;

  constructor(private studDashboardService: StudentDashboardService) { }

  ngOnInit(): void {
    this.studDashboardService.getStudent(1).subscribe((data:Student)=> this.student = data)
  }

}
