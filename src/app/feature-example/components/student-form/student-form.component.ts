import { Component, Input, OnInit, Output,EventEmitter, OnChanges } from '@angular/core';
import { StudyArea } from 'src/app/shares/interfaces/studyarea';
import { Student } from '../../../shares/interfaces/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit,OnChanges {

  studyAreas: StudyArea[] = [
    { key: 'Area1', value: 'Jhon' },
    { key: 'Area2', value: 'Steven' },
    { key: 'Area3', value: 'Nancy' }
  ]

  @Input()
  detail: Student;

  @Output()
  update: EventEmitter<Student> = new EventEmitter<Student>();


  constructor() { }

  ngOnInit(): void {
  }

   ngOnChanges(changes): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.detail) {
      this.detail = Object.assign({},changes.detail.currentValue);
    }    
  }

  toggleIsHonor(isHonor: boolean) {
    if (isHonor) {
      this.detail.enrollmentDate = Date.now();
    }
    
  }

  handleSubmit(student: Student, isValid: boolean) {
    if (isValid) {
      this.update.emit(student);
    }
    
  }

}
