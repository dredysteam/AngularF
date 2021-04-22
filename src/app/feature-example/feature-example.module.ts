import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

// containers
import { StudentDashboardComponent } from './containers/student-dashboard/student-dashboard.component';
import { StudentViewerComponent } from './containers/student-viewer/student-viewer.component';

// components
import { StudentCountComponent } from './components/student-count/student-count.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

// service
import { StudentDashboardService } from './student-dashboard.service';
import { StudentFormComponent } from './components/student-form/student-form.component';



@NgModule({
  declarations: [StudentDashboardComponent, StudentCountComponent, StudentDetailComponent, StudentViewerComponent, StudentFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [StudentDashboardComponent,StudentViewerComponent],
  providers:[StudentDashboardService]
})
export class FeatureExampleModule { }
