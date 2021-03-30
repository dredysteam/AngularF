import { Component, OnInit } from '@angular/core';

interface Student{
  id: number,
  name: string,
  isHonor: boolean
}

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  names: string[] = ['Juan', 'Julia', 'Ana', 'Teresa', 'Pedro'];

  students: Student[] = [
    {
      id: 1,
      name: 'Pedro',
      isHonor:true
    },
    {
      id: 2,
      name: 'Juan',
      isHonor:false
    },
    {
      id: 3,
      name: 'Julia',
      isHonor:true
    },
    {
      id: 4,
      name: 'Ana',
      isHonor:false
    },
    {
      id: 5,
      name: 'Teresa',
      isHonor:false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
