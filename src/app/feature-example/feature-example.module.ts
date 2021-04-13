import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { StudentDashboardComponent } from './containers/student-dashboard/student-dashboard.component';



@NgModule({
  declarations: [StudentDashboardComponent],
  imports: [
    CommonModule
  ],
  exports:[StudentDashboardComponent]
})
export class FeatureExampleModule { }
