import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTService {
  apiUri = '/api/employees'
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }

  getAllEmployeeData():Observable<any>{
   
    return this.http.get<any>(this.apiUri)
  }

  newEmployee(data:any): Observable<any>{
    return this.http.post<any>(
      this.apiUri,
      data,
      {headers: this.httpOptions}
    )
  }
}


