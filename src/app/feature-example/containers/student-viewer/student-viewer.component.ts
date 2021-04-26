import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Student } from 'src/app/shares/interfaces/student';
import { StudentDashboardService } from '../../student-dashboard.service';

@Component({
  selector: 'app-student-viewer',
  templateUrl: './student-viewer.component.html',
  styleUrls: ['./student-viewer.component.css']
})
export class StudentViewerComponent implements OnInit {

  student:Student;

  constructor(private studDashboardService: StudentDashboardService , private router:Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((data: Student) => {
          return this.studDashboardService.getStudent(data.id)
        })
      ).subscribe((data: Student) => this.student = data);
    
  }

  onUpdateStudent(event: Student) {
    this.studDashboardService.updateStudent(event)
      .subscribe((data: Student) => {
        this.student = Object.assign({}, this.student, event);
    })
  }

}
