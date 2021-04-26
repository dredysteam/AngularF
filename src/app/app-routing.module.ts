import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompArchFeatModulesComponent } from './shares/angular/component-architecture-features-modules/comp-arch-feat-modules/comp-arch-feat-modules.component';
import { NgclassComponent } from './shares/angular/rendering-flows/ngclass/ngclass.component';
import { NgforComponent } from './shares/angular/rendering-flows/ngfor/ngfor.component';
import { NgifNgtemplateSyntaxComponent } from './shares/angular/rendering-flows/ngif-ngtemplate-syntax/ngif-ngtemplate-syntax.component';
import { NgstyleComponent } from './shares/angular/rendering-flows/ngstyle/ngstyle.component';
import { PipesuseComponent } from './shares/angular/rendering-flows/pipesuse/pipesuse.component';
import { TdfComponent } from './shares/angular/template-driven-forms/tdf/tdf.component';
import { EventBindingComponent } from './shares/angular/template-fundamentals/event-binding/event-binding.component';
import { InterpolationExpressionsComponent } from './shares/angular/template-fundamentals/interpolation-expressions/interpolation-expressions.component';
import { PropertyBindingComponent } from './shares/angular/template-fundamentals/property-binding/property-binding.component';
import { TemplateRefVariablesComponent } from './shares/angular/template-fundamentals/template-ref-variables/template-ref-variables.component';
import { TwoWayBindingComponent } from './shares/angular/template-fundamentals/two-way-binding/two-way-binding.component';
import { NotFoundComponent } from './shares/bootstrap/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
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
  },
  {
    path: 'ngif-ngtemplate-syntax',
    component:NgifNgtemplateSyntaxComponent
  },
  {
    path: 'ngfor',
    component: NgforComponent
  },
  {
    path: 'ngclass',
    component: NgclassComponent
  },
  {
    path: 'ngstyle',
    component: NgstyleComponent
  },
  {
    path: 'pipesuse',
    component:PipesuseComponent
  },
  {
    path: 'comparch',
    component: CompArchFeatModulesComponent
  }
  , {
    path: 'comparch/1',
    component:TdfComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
