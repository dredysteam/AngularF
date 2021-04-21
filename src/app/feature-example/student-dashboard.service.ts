import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';
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
  // PROMISE EXAMPLE ???
  //  getStudents(): Promise<Student[]> {
  //   return this.http.get(`${LOCAL_API}/students`).toPromise()
  //     .then((response: any) => response)
  // }

  updateStudent(student: Student): Observable<Student>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put(`${LOCAL_API}/students/${student.id}`,student, httpOptions).pipe(
      map((response: any) => {
        return response;
      }))
  }

  removeStudent(student: Student): Observable<Student>{
    return this.http.delete(`${LOCAL_API}/students/${student.id}`).pipe(
      map((response: any) => {
        return response;
      })
    )
  }
}
