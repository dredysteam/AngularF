import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// interfaces
import { Student } from '../shares/interfaces/student';

const LOCAL_API: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class StudentDashboardService {

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get(`${LOCAL_API}/students`).pipe(map((response: any) => {
      return response;
    }))
  }

  updateStudent(student:Student): Observable<Student>{
    return this.http.put(`${LOCAL_API}/students/${student.id}`,student).pipe(
      map((response: any) => {
        return response;
      }))
  }
}
