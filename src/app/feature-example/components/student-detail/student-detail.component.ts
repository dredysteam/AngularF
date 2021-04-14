import { Component, Input, Output,EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Student } from 'src/app/shares/interfaces/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnChanges{

  @Input()
  detail: Student;

  @Output()
  remove: EventEmitter<Student> = new EventEmitter();

  @Output()
  edit: EventEmitter<Student> = new EventEmitter();

  editing: boolean = false;

  constructor() { }


  ngOnChanges(changes): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.detail) {
      this.detail = Object.assign({},changes.detail.currentValue);
    }    
  }

  onNameChange(value: string) {
    this.detail.name = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);      
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

}
