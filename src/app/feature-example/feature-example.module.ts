import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { StudentDashboardComponent } from './containers/student-dashboard/student-dashboard.component';

// components
import { StudentCountComponent } from './components/student-count/student-count.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';



@NgModule({
  declarations: [StudentDashboardComponent, StudentCountComponent, StudentDetailComponent],
  imports: [
    CommonModule
  ],
  exports:[StudentDashboardComponent]
})
export class FeatureExampleModule { }
