import { Component, OnInit } from '@angular/core';
import { Nav } from '../../interfaces/nav';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  templateNav: Nav[] = [
    {
      link: '/interpolation-expressions',
      name:'Interpolation & Expressions'
    },
    {
      link: '/property-binding',
      name:'Property Binding'
    },
    {
      link: '/event-binding',
      name:'Event Binding'
    },
    {
      link: '/two-way-binding',
      name:'Two Way Binding'
    },
    {
      link: '/template-ref-variables',
      name:'Template Ref Variables'
    }
  ]

  renderingNav: Nav[] = [
    {
      link: '/ngif-ngtemplate-syntax',
      name:'NgIf & ngtemplate Syntax'
    },
     {
      link: '/ngfor',
      name:'NgFor'
    },
      {
      link: '/ngclass',
      name:'NgClass'
    },
    {
      link: '/ngstyle',
      name:'NgStyle'
    },
    {
      link: '/pipesuse',
      name:'PipesUse'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
