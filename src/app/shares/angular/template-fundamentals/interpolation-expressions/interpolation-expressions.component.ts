import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-expressions',
  templateUrl: './interpolation-expressions.component.html',
  styleUrls: ['./interpolation-expressions.component.css']
})
export class InterpolationExpressionsComponent implements OnInit {

  title: string="Interpolation example";
  numberOne: number = 1;
  numberTwo: number = 3;
  isHappy: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
