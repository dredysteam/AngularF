import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-variables',
  templateUrl: './template-ref-variables.component.html',
  styleUrls: ['./template-ref-variables.component.css']
})
export class TemplateRefVariablesComponent implements OnInit {

  value: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: string) {
    this.value = value;
  }

}
