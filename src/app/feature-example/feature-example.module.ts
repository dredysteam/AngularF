import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router'

// containers
import { StudentDashboardComponent } from './containers/student-dashboard/student-dashboard.component';
import { StudentViewerComponent } from './containers/student-viewer/student-viewer.component';

// components
import { StudentCountComponent } from './components/student-count/student-count.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentFormComponent } from './components/student-form/student-form.component';


// service
import { StudentDashboardService } from './student-dashboard.service';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component:StudentDashboardComponent
      },
      {
        path: ':id',
        component:StudentViewerComponent
      }
    ]
  },
  
]

@NgModule({
  declarations: [StudentDashboardComponent, StudentCountComponent, StudentDetailComponent, StudentViewerComponent, StudentFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [StudentDashboardComponent,StudentViewerComponent],
  providers:[StudentDashboardService]
})
export class FeatureExampleModule { }
