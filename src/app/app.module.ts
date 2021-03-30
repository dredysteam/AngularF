import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shares bootstrap
import { NavComponent } from './shares/bootstrap/nav/nav.component';
import { InputComponent } from './shares/bootstrap/input/input.component';

// shares angular template fundamentals
import { InterpolationExpressionsComponent } from './shares/angular/template-fundamentals/interpolation-expressions/interpolation-expressions.component';
import { PropertyBindingComponent } from './shares/angular/template-fundamentals/property-binding/property-binding.component';
import { EventBindingComponent } from './shares/angular/template-fundamentals/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './shares/angular/template-fundamentals/two-way-binding/two-way-binding.component';
import {TemplateRefVariablesComponent } from './shares/angular/template-fundamentals/template-ref-variables/template-ref-variables.component';
import { ButtonComponent } from './shares/bootstrap/button/button.component';

// shares angular rendering flow
import { NgifNgtemplateSyntaxComponent } from './shares/angular/rendering-flows/ngif-ngtemplate-syntax/ngif-ngtemplate-syntax.component';
import { NgforComponent } from './shares/angular/rendering-flows/ngfor/ngfor.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InputComponent,
    InterpolationExpressionsComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    TemplateRefVariablesComponent,
    ButtonComponent,
    NgifNgtemplateSyntaxComponent,
    NgforComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    NavComponent,
    InputComponent,
    InterpolationExpressionsComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    TemplateRefVariablesComponent,
    NgifNgtemplateSyntaxComponent,
    NgforComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
