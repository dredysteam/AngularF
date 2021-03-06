import { Component, OnInit } from '@angular/core';
import { Student} from '../../../shares/interfaces/student';
import { StudentDashboardService } from '../../student-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  students: Student[];

  constructor(private studentDashobardService: StudentDashboardService , private router:Router) { }

  ngOnInit(): void {
    // When use Promise change subscribe for then
    this.studentDashobardService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    },(error:any)=> console.log('Response Error!!' + error));
  }

  handleRemove(event: Student) {
    this.studentDashobardService.removeStudent(event)
      .subscribe((data:Student) => {
        this.students = this.students.filter((student: Student) => {
          return student.id !== event.id;
        })
      })
  }

  handleEdit(event: Student) {
    this.studentDashobardService.updateStudent(event).subscribe((data:Student) => {
      this.students = this.students.map((student: Student) => {
       if (student.id === data.id) {
        student = Object.assign({}, student, data);
      }
      return student;
    })
      
    })
    
  }
  handleView(event: Student) {
    this.router.navigate(['/dashboard',event.id])
  }

}
