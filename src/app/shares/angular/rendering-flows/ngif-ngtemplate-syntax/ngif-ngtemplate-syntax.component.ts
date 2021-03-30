import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-ngtemplate-syntax',
  templateUrl: './ngif-ngtemplate-syntax.component.html',
  styleUrls: ['./ngif-ngtemplate-syntax.component.css']
})
export class NgifNgtemplateSyntaxComponent implements OnInit {
  inputHasValue: boolean = false;
  value: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  hasValue(event: any) {
    if (event.target.value) {
      this.inputHasValue = true;
    }
    else this.inputHasValue = false;
    // console.log(event);
    
  }

  handleChange(value: string) {
    this.value = value;
    
  }

}
