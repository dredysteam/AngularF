import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

// containers
import { StudentDashboardComponent } from './containers/student-dashboard/student-dashboard.component';
import { StudentViewerComponent } from './containers/student-viewer/student-viewer.component';

// components
import { StudentCountComponent } from './components/student-count/student-count.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

// service
import { StudentDashboardService } from './student-dashboard.service';


@NgModule({
  declarations: [StudentDashboardComponent, StudentCountComponent, StudentDetailComponent, StudentViewerComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [StudentDashboardComponent,StudentViewerComponent],
  providers:[StudentDashboardService]
})
export class FeatureExampleModule { }
