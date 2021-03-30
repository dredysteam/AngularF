import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  title: string = 'Property Binding';

  logo: string = 'assets/images/ultimate.png';

  name: string = 'Edilberto Rios';

  constructor() { }

  ngOnInit(): void {
  }

}
