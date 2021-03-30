import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './shares/angular/template-fundamentals/event-binding/event-binding.component';
import { InterpolationExpressionsComponent } from './shares/angular/template-fundamentals/interpolation-expressions/interpolation-expressions.component';
import { PropertyBindingComponent } from './shares/angular/template-fundamentals/property-binding/property-binding.component';
import { TemplateRefVariablesComponent } from './shares/angular/template-fundamentals/template-ref-variables/template-ref-variables.component';
import { TwoWayBindingComponent } from './shares/angular/template-fundamentals/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {
    path: 'interpolation-expressions',
    component:InterpolationExpressionsComponent
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent
  },
  {
    path: 'event-binding',
    component: EventBindingComponent
  },
  {
    path: 'two-way-binding',
    component: TwoWayBindingComponent
  },
  {
    path: 'template-ref-variables',
    component: TemplateRefVariablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
