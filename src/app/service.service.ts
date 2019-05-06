import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private _http: HttpClient) {}

  getStudents() {
    // const params = new HttpParams()
    //   .append('groupId', groupId);
    // return this._http.get('api/students', { params });
    return this._http.get('api/students');
  }

  postStudent(query) {
    return this._http.post('api/post_student', query);
  }

  getClasses() {
    // const params = new HttpParams()
    //   .append('groupId', groupId);
    // return this._http.get('api/students', { params });
    return this._http.get('api/classes');
  }

  postClass(query) {
    return this._http.post('api/post_class', query);
  }

}
